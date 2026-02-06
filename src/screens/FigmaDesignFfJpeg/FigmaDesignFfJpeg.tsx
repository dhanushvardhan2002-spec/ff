import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";

const agentCards = [
  {
    title: "WEB AGENT",
    description: "Context-aware on-site assistance",
    icon: "/image-4.png",
    buttonText: "TRY LIVE CHAT DEMO",
    gradient: "from-blue-50 to-blue-100",
    accentColor: "text-blue-700",
  },
  {
    title: "CALLING AGENT",
    description: "Human-like voice AI, zero wait",
    icon: "/image-3.png",
    buttonText: "TEST VOICE DEMO",
    gradient: "from-violet-50 to-violet-100",
    accentColor: "text-violet-700",
  },
  {
    title: "WHATSAPP AGENT",
    description: "Automate messaging instantly",
    icon: "/image-2.png",
    buttonText: "SCAN TO TEST ON PHONE",
    gradient: "from-teal-50 to-teal-100",
    accentColor: "text-teal-700",
  },
];

export const FigmaDesignFfJpeg = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/image-19.png" alt="Logo" className="h-8 w-auto" />
            </div>

            <div className="flex items-center gap-1 bg-slate-100 rounded-full p-1">
              <Button variant="ghost" size="sm" className="rounded-full text-slate-600 hover:text-slate-900">
                Afterlife
              </Button>
              <Button size="sm" className="rounded-full bg-white text-slate-700 shadow-sm hover:bg-white/90">
                Products
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full text-slate-600 hover:text-slate-900">
                About
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full text-slate-600 hover:text-slate-900">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">
              AI-Powered Agent Solutions
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Transform your customer interactions with intelligent agents across multiple channels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agentCards.map((card, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${card.gradient} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center">
                      <img
                        src={card.icon}
                        alt={card.title}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  <CardTitle className={`text-lg font-bold ${card.accentColor}`}>
                    {card.title}
                  </CardTitle>
                  <CardDescription className="text-slate-700 text-base mt-2">
                    {card.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 pb-6">
                  <div className="h-48 bg-white/50 rounded-xl mb-4 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-slate-400 text-sm">Demo Preview</div>
                  </div>

                  <Button
                    className="w-full bg-white hover:bg-white/90 text-slate-700 shadow-sm font-medium"
                    size="lg"
                  >
                    {card.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <section className="mt-20 bg-white rounded-2xl shadow-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Choose an agent solution that fits your needs and transform your customer experience today
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8">
                View All Solutions
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 px-8">
                Contact Sales
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
