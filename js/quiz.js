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
    question: "Was versteht man unter 'Grilagem' in Brasilien?",
    answers: [
      { text: "Eine traditionelle Anbaumethode indigener Völker",         correct: false },
      { text: "Landraub durch gefälschte Eigentumsdokumente",              correct: true  },
      { text: "Ein staatliches Umsiedlungsprogramm",                       correct: false },
      { text: "Das Roden von Wald, um Land als Ackerland anzumelden",      correct: true  },
    ],
    explanation: "Grilagem bezeichnet in Brasilien den Landraub durch gefälschte Dokumente. Der Begriff kommt von 'Grilos' (Grillen) — angeblich wurden früher Dokumente in Schachteln mit Grillen gelegt, damit das Papier gealtert und legitimer wirkte. Oft wird das Land zuerst gerodet, damit die Behörden es als bewirtschaftetes Land anerkennen."
  },

  {
    question: "Welche der folgenden Aussagen zum Gilgel Gibe III Damm in Äthiopien sind korrekt?",
    answers: [
      { text: "Er ist der höchste Damm Afrikas",                                          correct: true  },
      { text: "Er wurde 2015 fertiggestellt",                                              correct: true  },
      { text: "Er versorgt die lokale Bevölkerung zuverlässig mit Trinkwasser",            correct: false },
      { text: "Er unterbricht die jährlichen Überschwemmungen des Omo-Flusses",            correct: true  },
    ],
    explanation: "Der Gilgel Gibe III ist tatsächlich der höchste Damm Afrikas und wurde 2015 fertiggestellt. Statt der lokalen Bevölkerung zu nutzen, schadet er ihr: Die Unterbrechung der Überschwemmungen des Omo-Flusses entzieht den rund 200'000 Einwohner*innen des unteren Omo-Tals ihre natürliche Bewässerung."
  },

  {
    question: "Warum ist indigenes Land in Indonesien besonders gefährdet?",
    answers: [
      { text: "Über 80% des indigenen Landes wird vom Staat nicht anerkannt",   correct: true  },
      { text: "Indigene Völker haben gesetzlich kein Recht auf Landbesitz",      correct: false },
      { text: "Nicht anerkanntes Land gilt als staatliches Land und kann verkauft werden", correct: true },
      { text: "Indigene Gemeinschaften werden durch mangelnde Bildung leicht überredet", correct: true },
    ],
    explanation: "In Indonesien wird über 80% des traditionell von indigenen Völkern bewirtschafteten Landes vom Staat nicht anerkannt — es gilt rechtlich als Staatsland und kann günstig an Investor*innen vergeben werden. Gesetzlich haben indigene Völker grundsätzlich Rechte, doch die fehlende formelle Anerkennung und Bildungsunterschiede machen sie verwundbar."
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
