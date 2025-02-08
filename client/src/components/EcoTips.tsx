import { Lightbulb } from "lucide-react";
import { useState, useEffect } from "react";

const tips = [
  "Χρησιμοποιήστε φυσικό φωτισμό όταν είναι δυνατόν",
  "Απενεργοποιήστε τις συσκευές όταν δεν τις χρησιμοποιείτε",
  "Ρυθμίστε τη θερμοκρασία του κλιματισμού στους 26°C το καλοκαίρι",
  "Αντικαταστήστε τους λαμπτήρες με LED",
  "Χρησιμοποιήστε έξυπνες πρίζες για αυτόματη απενεργοποίηση",
  "Αξιοποιήστε τον φυσικό εξαερισμό"
];

export default function EcoTips() {
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip(prev => (prev + 1) % tips.length);
    }, 10000); // Αλλαγή συμβουλής κάθε 10 δευτερόλεπτα

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-accent/20 p-4 rounded-lg border border-accent">
      <div className="flex items-center gap-3 mb-2">
        <Lightbulb className="h-5 w-5 text-primary" />
        <h3 className="font-medium">Eco Tip της Ημέρας</h3>
      </div>
      <p className="text-muted-foreground">
        {tips[currentTip]}
      </p>
      <div className="flex gap-1 mt-3 justify-center">
        {tips.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-6 rounded-full transition-colors duration-300 ${
              index === currentTip ? 'bg-primary' : 'bg-border'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 