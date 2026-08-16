import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory lead database to track submissions for this session
const leads: Array<{
  id: string;
  name: string;
  email: string;
  company: string;
  phone?: string;
  services: string[];
  message: string;
  submittedAt: string;
  status: string;
}> = [];

// Initialize Gemini Client
let ai: GoogleGenAI | null = null;
try {
  if (process.env.GEMINI_API_KEY) {
    ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  } else {
    console.warn("GEMINI_API_KEY environment variable is not defined. AI Consultant will run in simulation mode.");
  }
} catch (error) {
  console.error("Error initializing GoogleGenAI client:", error);
}

// ----------------------------------------------------
// API ROUTES FIRST
// ----------------------------------------------------

// 1. Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// 2. Premium lead capture with standard corporate validation
app.post("/api/contact", (req, res) => {
  const { name, email, company, phone, services, message } = req.body;

  if (!name || !email || !company) {
    return res.status(400).json({ error: "Name, email, and company are required fields." });
  }

  const newLead = {
    id: `sr-lead-${Math.random().toString(36).substring(2, 9)}`,
    name,
    email,
    company,
    phone: phone || "Not provided",
    services: Array.isArray(services) ? services : [],
    message: message || "Interested in learning more about Odoo systems.",
    submittedAt: new Date().toISOString(),
    status: "Captured (Synced to Shepherd Lead Database Mock)",
  };

  leads.push(newLead);
  console.log(`[Shepherd's Rod Lead Tracker] Lead captured:`, newLead);

  return res.status(201).json({
    success: true,
    message: "Thank you. Your strategy request has been logged. An executive consultant will reach out within 4 business hours.",
    leadId: newLead.id,
  });
});

// 3. AI Odoo Strategist / ROI Calculator Advisor
app.post("/api/consultant", async (req, res) => {
  const { prompt, history } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required." });
  }

  // System Instruction guiding the elite executive advisor tone
  const systemInstruction = `You are 'Shepherd Odoo Advisor', an elite B2B Odoo ERP and business management strategy consultant at Shepherd's Rod Consultancy. 
Your target audience consists of Chief Executives, Chief Financial Officers, Operations Directors, and business owners seeking premium digital transformation.
Your responses should reflect the following principles:
- **Tone**: Decisive, executive, elite, clear, and action-oriented. Avoid slang, buzzwords, or verbose filler. Speak with absolute authority and trust.
- **Subject**: Odoo ERP implementation, workflow automation, AI integrations, business process optimization, and leadership strategy.
- **Form**: Use elegant markdown structures, clear lists, and bold headers. Focus on tangible financial metrics and ROI.
- **Special ROI Capability**: If the client mentions operational metrics (such as hours spent per employee, manual entry bottle-necks, team size, or licensing fees for Salesforce/SAP), provide a calculated ROI estimate.
- **Shepherd's Rod Symbolism**: Subtly reinforce alignment, direction, structure, and digital transformation.

If the GEMINI_API_KEY is not configured, reply as a fallback. Remember to maintain character at all times. Do not output conversational filler.`;

  try {
    if (ai) {
      // Use the correct GoogleGenAI SDK format: gemini-3.5-flash for rapid, elite consultancies
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: [
          ...(history || []).map((h: any) => ({
            role: h.role,
            parts: [{ text: h.text }],
          })),
          { role: "user", parts: [{ text: prompt }] },
        ],
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      return res.json({
        text: response.text,
        success: true,
      });
    } else {
      // Simulate highly high-quality, tailored consulting response as fallback
      const simulatedResponse = `### Directives from Shepherd's Rod Consultancy

We have analyzed your strategic input regarding your business management workflow. 

#### Operational Observations
* **Administrative Latency**: Traditional, fragmented legacy software systems generate up to **22 hours of redundant labor per employee weekly**.
* **Data Silos**: Operating across Salesforce, Hubspot, or spreadsheet arrays prevents real-time reporting, degrading corporate agility.

#### Recommended Odoo Architecture
1. **Unified Core (Odoo Sales & Customer Portals)**: Eliminate multi-system subscription overlaps, saving up to **35% in direct licensing costs**.
2. **Process Automation (Odoo Inventory & Projects)**: Instantly dispatch workflows from deal closure, yielding a **45% reduction in project lifecycle delays**.
3. **Advanced Business Intelligence**: Implement centralized financial accounting for immediate executive-level reporting.

#### Direct ROI Projection
* **License Consolidation**: Average savings of **£14,000 to £65,000 annually** relative to Salesforce/SAP arrays.
* **Productivity Uplift**: Projected conversion rate increase of **38%** with structured sales automation.

*Would you like to review our technical implementation methodology or secure an executive calendar slot for a Free Strategy Consultation?*`;

      return res.json({
        text: simulatedResponse,
        success: true,
        simulation: true,
      });
    }
  } catch (error: any) {
    console.error("Gemini API Error in /api/consultant:", error);
    return res.status(500).json({
      error: "An error occurred while generating strategy. Please try again.",
      details: error.message,
    });
  }
});

// ----------------------------------------------------
// VITE OR STATIC SERVING MIDDLEWARE
// ----------------------------------------------------
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Configuring Vite Dev Server middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Serving static files in production mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Shepherd's Rod server] Operational and listening on http://localhost:${PORT}`);
  });
}

startServer();
