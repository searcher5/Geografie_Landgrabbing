// ============================================================
// FRAGEN HIER BEARBEITEN
// ============================================================
// Jede Frage ist ein Objekt mit:
//   question : Der Fragetext (String)
//   answers  : Array von Antwortmöglichkeiten, jede mit:
//                text    : Antworttext (String)
//                correct : true = richtig, false = falsch
//   explanation : Erklärungstext, der nach der Korrektur erscheint (String)
//
// BEISPIEL für eine neue Frage — einfach ans Ende des Arrays kopieren:
//
// {
//   question: "Deine Frage hier?",
//   answers: [
//     { text: "Richtige Antwort",  correct: true  },
//     { text: "Falsche Antwort",   correct: false },
//     { text: "Richtige Antwort",  correct: true  },
//     { text: "Falsche Antwort",   correct: false },
//   ],
//   explanation: "Erklärungstext der nach der Korrektur erscheint."
// },
// ============================================================

const QUESTIONS = [

  {
    question: "Warum ist Land Grabbing oft besonders problematisch für indigene Völker?",
    answers: [
      { text: "Sie haben oft keinen Zugang zu Anwält*innen oder Bildung, um sich zu wehren",         correct: true },
      { text: "Ihr Land ist häufig nicht offiziell dokumentiert",              correct: true  },
      { text: "Sie besitzen meist zu viel Land",                       correct: false },
      { text: "Sie leben hauptsächlich in Städten",      correct: false  },
    ],
    explanation: "Indigene Völker sind besonders betroffen von Land Grabbing, da sie wegen ihrer mangelnden Bildung und Einbindung in das Rechtssystem des Staates keine offiziellen Dokumente besorgen können oder wollen. Auch fallen sie öfter auf Überzeugungsstrategien der Regierung oder der Investor*innen herein, ihr Land abzugeben."
  },

  {
    question: "Was beschreibt der Begriff 'Grilagem' in Brasilien am besten?",
    answers: [
      { text: "Schutz indigener Gebiete",                                          correct: false  },
      { text: "Illegales Aneignen von Land durch gefälschte Dokumente",                                              correct: true  },
      { text: "Staatliche Landreform",            correct: false },
      { text: "Nachhaltige Landwirtschaft",            correct: false  },
    ],
    explanation: "'Grilagem' bezeichnet den Landgewinn durch Land Grabbing und ist meistens mit einer Rodung des (Regen-) Waldes verbunden. Grilagem hat in Brasilien eine weit zurückreichende Geschichte und ist eng mit dem Abholzen des Amazonas' verknüpft."
  },

  {
    question: "Warum können Investor*innen in Indonesien relativ einfach Land erwerben?",
    answers: [
      { text: "Weil das Land kostenlos ist",   correct: false  },
      { text: "Weil es kaum Landwirtschaft gibt",      correct: false },
      { text: "Da es auf der Insel keine staatliche Überwachung gibt", correct: false },
      { text: "Weil viel Land staatlich ist und indigene Rechte nicht anerkannt werden", correct: true },
    ],
    explanation: "In Indonesien wird über 80% des traditionell von indigenen Völkern bewirtschafteten Landes vom Staat nicht anerkannt. Es gilt rechtlich als Staatsland und kann günstig an Investor*innen vergeben werden. Gesetzlich haben indigene Völker grundsätzlich Rechte, doch die fehlende formelle Anerkennung und Bildungsunterschiede machen sie verwundbar."
  },
  
  {
    question: "Warum profitieren Einheimische oft nicht von neuen Plantagen durch Land Grabbing?",
    answers: [
      { text: "Die Arbeitsplätze werden meist schlecht bezahlt",   correct: true  },
      { text: "Die Produkte werden exportiert, statt lokal verwendet zu werden",      correct: true },
      { text: "Die versprochene Infrastruktur wird nicht gebaut oder dient den Einheimischen nicht", correct: true },
      { text: "Die Pacht bringt nicht viel Geld ein und dieses fliesst oft an die Regierung statt an die lokale Gemeinde", correct: true },
    ],
    explanation: "Auf Plantagen dieser Investor*innen werden nur selten lokale Nahrungsmittel angebaut. Oft werden Pflanzen für Nutztiere oder Biokraftstoff angebaut. Um mit der Konkurrenz mithalten zu können, setzen die Farmbesitzer*innen auf billige Arbeitskräfte und kaufen nur das preiswerteste Land. Solange der Export läuft, kümmern sie sich nicht um lokale Infrastruktur oder das Wohl der Anwohnenden."
  },

  {
    question: "Welche Rolle spielen internationale Abkommen beim Land Grabbing?",
    answers: [
      { text: "Sie verhindern Landkäufe komplett",   correct: false  },
      { text: "Sie schützen nur die lokale Bevölkerung",      correct: false },
      { text: "Sie schützen Investitionen ", correct: true },
      { text: "Sie liberalisieren Landkäufe", correct: true },
    ],
    explanation: "Viele internationale Abkommen sind neoliberalistisch geprägt. Sie schützen Investitionen und sorgen dafür, dass man risikofrei und möglichst unbürokratisch Agrarflächen in anderen Ländern kaufen oder pachten kann."
  },

  {
    question: "Warum wird Land Grabbing oft als „rechtliche Grauzone“ bezeichnet?",
    answers: [
      { text: "Weil Gesetze unklar sind oder umgangen werden",   correct: true  },
      { text: "Weil es nur in S1 und S2 Ländern passiert",      correct: false },
      { text: "Weil es immer illegal ist", correct: false },
      { text: "Weil die Staaten nichts gegen die Investor*innen tun dürfen", correct: false },
    ],
    explanation: "Investor*innen, die Land Grabbing betreiben, profitieren oft von schlechter Regulierung. Was sie tun, kann oft als legal ausgelegt werden, obwohl es soziale und ökologische Konsequenzen nach sich zieht. Allerdings müssen sich auch Land Grabber nicht gesetzlich immun. Deswegen sind besonders Gebiete mit schwacher staatlicher Kontrolle beliebt."
  },
  
  {
    question: "Warum führt Land Grabbing oft zu Konflikten?",
    answers: [
      { text: "Weil dort bereits andere Bauprojekte im Gange sind",   correct: false  },
      { text: "Weil verschiedene Gruppen Anspruch auf dasselbe Land erheben",      correct: true },
      { text: "Weil es zu viel Land gibt", correct: false },
      { text: "Weil Investor*innen keine Gewinne machen", correct: false },
    ],
    explanation: "Viele Gebiete, die billig aufgekauft werden, gehörten davor einzelnen Bäuer*innen oder Völkern. Doch anders als in der Schweiz reicht das Argument des Gewohnheitsrechts in betroffenen Ländern oft nicht aus. Keine Urkunde: Kein Anrecht."
  },

  {
    question: "Inwiefern hat Land Grabbing einen Einfluss auf die globale Hungerkrise?",
    answers: [
      { text: "Land Grabbing verschärft die Hungersituation, da fruchtbares Land oft für Exportprodukte genutzt wird, wodurch lokale Kleinbauern verdrängt werden.",   correct: false  },
      { text: "Land Grabbing verbessert grundsätzlich die Ernährungssituation, da grosse Investor*innen effizienter produzieren und somit mehr Nahrung für die lokalen Gemeinden verfügbar wird.",      correct: true },
      { text: "Land Grabbing hat kaum Einfluss auf Hunger, da die globale Nahrungsmittelproduktion bereits ausreichend ist und Hunger nur durch individuelle Faktoren entsteht.", correct: false },
      { text: "Nach zu intensiver Bewirtschaftung des Agrarlands wird das unfruchtbare Land zurück gelassen und kann nicht mehr zur lokalen Nahrungsmittelproduktion verwendet werden. ", correct: false },
    ],
    explanation: "Viele Gebiete, die billig aufgekauft werden, gehörten davor einzelnen Bäuer*innen oder Völkern. Doch anders als in der Schweiz reicht das Argument des Gewohnheitsrechts in betroffenen Ländern oft nicht aus. Keine Urkunde: Kein Anrecht."
  },
];

// ============================================================
// AB HIER NICHTS ÄNDERN — das ist die Quiz-Logik
// ============================================================

function buildQuiz() {
  const container = document.getElementById('quiz-container');
  container.innerHTML = '';

  QUESTIONS.forEach((q, qi) => {
    const card = document.createElement('div');
    card.className = 'quiz-card';
    card.dataset.index = qi;

    const qText = document.createElement('p');
    qText.className = 'quiz-question';
    qText.innerHTML = `<span class="quiz-num">${qi + 1}.</span> ${q.question}`;
    card.appendChild(qText);

    const optList = document.createElement('div');
    optList.className = 'quiz-options';

    q.answers.forEach((ans, ai) => {
      const label = document.createElement('label');
      label.className = 'quiz-option';
      label.innerHTML = `
        <input type="checkbox" name="q${qi}" value="${ai}">
        <span class="option-box"></span>
        <span class="option-text">${ans.text}</span>
      `;
      optList.appendChild(label);
    });

    card.appendChild(optList);

    const explanation = document.createElement('div');
    explanation.className = 'quiz-explanation hidden';
    explanation.textContent = q.explanation;
    card.appendChild(explanation);

    container.appendChild(card);
  });

  document.getElementById('quiz-score').classList.add('hidden');
  document.getElementById('quiz-check').disabled = false;
}

function checkQuiz() {
  let totalCorrect = 0;

  QUESTIONS.forEach((q, qi) => {
    const card = document.querySelector(`.quiz-card[data-index="${qi}"]`);
    const checkboxes = card.querySelectorAll('input[type="checkbox"]');
    const options = card.querySelectorAll('.quiz-option');
    const explanation = card.querySelector('.quiz-explanation');

    const correctSet = new Set(q.answers.map((a, i) => a.correct ? i : -1).filter(i => i >= 0));
    const selectedSet = new Set();
    checkboxes.forEach((cb, i) => { if (cb.checked) selectedSet.add(i); });

    // Determine if fully correct
    const isFullyCorrect =
      [...correctSet].every(i => selectedSet.has(i)) &&
      [...selectedSet].every(i => correctSet.has(i));

    if (isFullyCorrect) totalCorrect++;

    // Mark each option
    options.forEach((opt, i) => {
      const cb = opt.querySelector('input');
      cb.disabled = true;
      opt.classList.remove('correct', 'incorrect', 'missed');

      const isCorrect = correctSet.has(i);
      const isSelected = selectedSet.has(i);

      if (isSelected && isCorrect)  opt.classList.add('correct');
      if (isSelected && !isCorrect) opt.classList.add('incorrect');
      if (!isSelected && isCorrect) opt.classList.add('missed');
    });

    explanation.classList.remove('hidden');
  });

  // Show score
  const score = document.getElementById('quiz-score');
  const pct = Math.round((totalCorrect / QUESTIONS.length) * 100);
  score.className = 'quiz-score';
  score.innerHTML = `
    <span class="score-num">${totalCorrect} / ${QUESTIONS.length}</span>
    <span class="score-label">Fragen vollständig richtig beantwortet (${pct}%)</span>
  `;
  score.classList.remove('hidden');

  document.getElementById('quiz-check').disabled = true;
  score.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function resetQuiz() {
  buildQuiz();
}

// Init
buildQuiz();
