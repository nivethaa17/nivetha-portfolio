# Nivetha A — Developer Portfolio

A modern, animated developer portfolio built with **Next.js**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up EmailJS (for Contact Form)
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/) and sign up (free)
2. Create a new **Email Service** (Gmail recommended)
3. Create an **Email Template** with variables: `{{from_name}}`, `{{reply_to}}`, `{{message}}`
4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. Open `components/Contact.tsx` and replace:
   ```ts
   const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
   const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
   const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
   ```

### 3. Add Your Resume PDF
Place your resume PDF at:
```
public/Nivetha_A_Resume.pdf
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 5. Build for Production
```bash
npm run build
npm run start
```

## 📁 Project Structure
```
portfolio/
├── components/
│   ├── Navbar.tsx         # Navigation with dark/light toggle
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About me section
│   ├── Skills.tsx         # Skills grid
│   ├── Projects.tsx       # Project cards + modal popup
│   ├── Internships.tsx    # Timeline internship view
│   ├── Education.tsx      # Education timeline
│   ├── Achievements.tsx   # Achievements cards
│   ├── Contact.tsx        # EmailJS contact form
│   └── Footer.tsx         # Footer with social links
├── lib/
│   └── data.ts            # All portfolio data (edit this!)
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx          # Main page
├── styles/
│   └── globals.css        # Global styles + design system
└── public/
    └── Nivetha_A_Resume.pdf  # ← Add your resume here
```

## ✏️ Customizing Content
Edit `lib/data.ts` to update:
- Projects (add GitHub links, demo URLs, descriptions)
- Skills categories
- Internship details
- Education records
- Achievements

## 🎨 Design System
- **Font**: Clash Display (headings) + Cabinet Grotesk (body) + JetBrains Mono (code)
- **Primary**: Jade green `#22c55e`
- **Accent**: Amber `#f59e0b`
- **Theme**: Dark (default) / Light toggle

## 🚢 Deployment
Deploy to **Vercel** (recommended):
```bash
npm install -g vercel
vercel
```
Or push to GitHub and connect to Vercel for automatic deploys.
