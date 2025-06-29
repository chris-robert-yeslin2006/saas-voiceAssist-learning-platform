<h1 align="center">🎓 AI Teaching Companion – SaaS App</h1>
<h3>https://chris-voice-assist-learning-platfor.vercel.app/</h3>
<p align="center">
  A subscription-based AI-powered tutor that helps users learn any <strong>topic</strong> by <strong>voice interaction</strong>, powered by <strong>Vapi AI</strong>, <strong>Clerk Auth</strong>, and deployed with <strong>Kubernetes</strong>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-Next.js-blueviolet?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/Styling-TailwindCSS-38bdf8?style=for-the-badge&logo=tailwind-css" />
  <img src="https://img.shields.io/badge/Auth-Clerk-orange?style=for-the-badge&logo=clerk" />
  <img src="https://img.shields.io/badge/Voice-Vapi.ai-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Deployment-Kubernetes-blue?style=for-the-badge&logo=kubernetes" />
</p>

---

## ✨ Features

- 🧠 **AI Tutor Assistant** – Real-time voice sessions powered by GPT-4
- 🗣️ **Voice Interaction** with transcript & mic controls
- 🔐 **Clerk-based Auth** – JWT sessions and OAuth support
- 💳 **Stripe-powered Billing** with role-based access
- 📄 **Transcript Viewer** + live speech detection
- 💾 **Session History** saved for each user
- 🖼️ Responsive UI using **Tailwind + shadcn/ui**
- 🚀 Fully deployed and scalable via **Kubernetes**

---

## 🧱 Tech Stack

| Layer      | Tech                                     |
|------------|------------------------------------------|
| Frontend   | Next.js 14 (App Router), TypeScript       |
| Styling    | Tailwind CSS, shadcn/ui                  |
| Auth       | Clerk.dev                                |
| AI Voice   | Vapi.ai + 11Labs + Deepgram              |
| Backend    | Edge Functions / API Routes              |
| DB         | Supabase (for session storage)           |
| Payments   | Clerk Subscriptions (Stripe-based)       |
| DevOps     | Docker + Kubernetes                      |

---

## 📂 Project Structure

ai-teaching-saas/
├── app/ # Next.js pages & routes
│ └── companions/ # Companion session pages
├── components/ # UI components
├── lib/ # Vapi SDK, utils, constants
├── constants/ # Subject icons, voice styles
├── public/ # Assets (icons, Lottie)
├── styles/ # Tailwind config, globals
└── .env.local # Vapi, Clerk, Supabase keys

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/ai-teaching-companion.git
cd ai-teaching-companion
2️⃣ Install dependencies
bash
Copy
Edit
pnpm install
3️⃣ Configure .env.local
env
Copy
Edit
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
VAPI_API_KEY=your_vapi_key
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key
4️⃣ Run the app
bash
Copy
Edit
pnpm dev
🔐 Auth & Subscription (Clerk)
Supports JWT sessions, social logins

Subscriptions handled via Stripe portal

Middleware-protected routes

🧠 AI Voice Companion Flow
User chooses a subject + topic

System configures a Vapi assistant

Companion starts speaking with transcripts

Session is saved on call end

📞 Vapi Integration Details
Feature	Provider
Transcriber	Deepgram (nova-3)
Voice Synth	11Labs (custom voices)
AI Model	OpenAI GPT-4
Speech Tracking	Vapi Events

🔍 API Events Tracked
call-start, call-end

speech-start, speech-end

transcript (partial & final)

error for debugging

📸 Screenshots
Voice Companion	Session History	Transcript

🧠 Motivation
I created this app to make learning more interactive, powered by real-time AI conversation — not just text. Voice guidance improves retention and makes education accessible.

🔗 Live Demo
https://chris-voice-assist-learning-platfor.vercel.app/

🙋‍♂️ Author
👨‍💻 Chris Robert Yeslin

📧 robertchemist2006@gmail.com

💼 LinkedIn – @chris-robert

📷 Instagram – @yeslin_parker

<p align="center">🎙️ “Speak to learn. Learn to lead.” 🚀</p> ```
