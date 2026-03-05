function HowItWorks() {
  const steps = [
    { num: 1, title: "Créez votre compte", desc: "Inscription rapide en quelques clics" },
    { num: 2, title: "Accédez à votre espace", desc: "Espace personnalisé selon votre rôle" },
    { num: 3, title: "Consultez vos notes", desc: "Accès à vos résultats en temps réel" },
    { num: 4, title: "Déposez vos recours", desc: "Processus simplifié si nécessaire" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((step) => (
        <div key={step.num} className="text-center">
          <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
            {step.num}
          </div>
          <h3 className="font-semibold mb-2">{step.title}</h3>
          <p className="text-sm text-gray-600">{step.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default HowItWorks;