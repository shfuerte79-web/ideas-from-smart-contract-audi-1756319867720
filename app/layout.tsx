import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Smart Contract Auditor AI',
  description: '[
  {
    "title": "Smart Contract Guardian",
    "one_liner": "An AI-powered guardian that not only audits smart contracts but also suggests secure coding practices.",
    "why_now": "With the rapid rise in DeFi, the need for robust security solutions is at an all-time high.",
    "novel_mechanism": "Utilizes reinforcement learning to adaptively suggest fixes to smart contract code in real-time.",
    "ai_stack": [
      "Claude/GPT",
      "RAG",
      "Embeddings"
    ],
    "edge_use_cases": [
      "Automated coding workshops for developers",
      "Real-time vulnerability alerts during contract deployment"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Basic contract analysis",
        "Coding suggestion engine",
        "User feedback loop"
      ],
      "tools": [
        "Next.js",
        "Supabase",
        "Stripe",
        "n8n"
      ],
      "data_bootstrap": [
        "public dataset of vulnerabilities",
        "synthetic vulnerabilities generated via LLM"
      ],
      "risk": [
        "Accuracy of suggestions",
        "User trust in automated audits"
      ],
      "mitigation": [
        "User verification system",
        "Transparency in AI suggestions"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Interactive demo showcasing vulnerabilities",
        "Comparison with traditional auditing methods"
      ],
      "channels": [
        "ProductHunt",
        "X",
        "Telegram"
      ],
      "pricing": {
        "free": "Basic audit and suggestions",
        "pro": "$29/month for detailed analysis",
        "business": "$199/month for team access"
      }
    },
    "moat": [
      "community-driven improvements",
      "continual learning from user inputs",
      "early integrations with popular IDEs"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 9,
      "revenue_potential": 7,
      "defensibility": 8
    },
    "total_score": 32,
    "reasoning": "Rather than just auditing, it enables proactive improvements, making it indispensable for developers."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}