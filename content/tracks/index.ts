import type { Track, Unit } from '@/content/schema'

const sharedFoundationsUnit: Unit = {
  id: 'shared-foundations',
  slug: 'shared-foundations',
  title: 'Shared Unit — Mathematical Foundations',
  summary: 'A shared bridge unit for functions, linear algebra language, and optimization intuition used across engineering and ML.',
  order: 0,
  estimatedMinutes: 160,
  shared: true,
  sections: [
    {
      id: 'functions-modeling',
      slug: 'functions-modeling',
      title: 'Functions as models',
      summary: 'How formulas map inputs to outputs and why that framing drives both mechanics and machine learning.',
      conceptualOverview: [
        'A function becomes useful the moment it stops feeling like a schoolbook rule and starts feeling like a model of a process. In engineering, that process might convert time into position, voltage into current, or force into acceleration. In machine learning, the same idea converts feature values into a score, probability, or prediction. The shared idea is discipline: one allowed input leads to one output, so the relationship is dependable enough to study, improve, and trust.',
        'One helpful point of view is the input-output machine. You imagine placing a quantity into a black box and observing what comes out. This perspective helps beginners focus on what information goes in, what interpretation comes out, and whether the output changes in a sensible way when the input changes. It also naturally introduces domain restrictions, because not every input makes physical or statistical sense for every model.',
        'A second point of view is graphical. A graph lets you see growth, saturation, symmetry, thresholds, and periodic behavior in one glance. Engineers use this when checking whether a sensor response is approximately linear over some operating range. ML practitioners use it when interpreting activation functions, loss curves, or calibration plots. The graph is not separate from the formula; it is the geometry of the same rule.',
        'A third point of view is compositional. Many real systems are not modeled by one grand equation, but by stages. Raw measurements are normalized, then transformed, then fed into another rule. In engineering this could mean a sensor equation feeding a control law. In ML it could mean one layer feeding the next. Composition teaches that complicated models can be built from smaller understandable ones.',
        'This is why strong mathematical habits begin with naming variables and units before doing algebra. If $t$ is time in seconds and $x(t)$ is displacement in meters, then the function is carrying meaning, not just symbols. Likewise, if $x$ is a feature vector and $f(x)$ is a predicted probability, the model is a statement about uncertainty. Clear interpretation prevents a huge class of mistakes that look algebraically legal but are conceptually nonsense.',
        'The deepest payoff is transfer. Once you understand functions as structured relationships rather than isolated exercises, every later topic has a place to attach. Limits describe what a function is trying to do near a point. Derivatives describe how sensitive the output is to the input. Integrals describe the cumulative effect of outputs over a range. Probability models and optimization objectives are also functions, just in different clothes.'
      ],
      mathConnections: [
        'The formal statement is simple: a function $f$ assigns to each input $x$ in a domain exactly one output $f(x)$ in a codomain. That single-output condition is what makes prediction and analysis possible. If a rule produced multiple outputs for the same input, it would not be a well-defined function in the mathematical sense.',
        'Average rate of change on an interval from $x=a$ to $x=b$ is $$\\frac{f(b)-f(a)}{b-a}.$$ This quotient is the slope of the secant line, and it gives an early numerical summary of how responsive the model is over a finite range. It is the bridge from static formulas to dynamic behavior.',
        'Composition is written as $(g \\circ f)(x)=g(f(x))$. The notation matters because it preserves order. If one stage rescales an input and a second stage squares it, reversing the order usually changes the result. Pipelines in engineering and ML live inside this compact notation.',
        'Inverse functions reverse a transformation when the original rule is one-to-one on the domain of interest. Symbolically, if $y=f(x)$ and $f^{-1}$ exists, then $f^{-1}(y)=x$. In practical terms, inverse thinking asks whether you can recover a cause from an observed effect, which is central in calibration and inference.',
        'Multiple representations should agree. A table of values, a graph, and an equation are different windows into the same relationship. If $f(x)=2x+3$, then the slope visible on the graph, the constant increment in a table, and the coefficient of $x$ in the formula all communicate the same linear structure.',
        'Functions also organize later multivariable thinking. A vector-valued input $x \\in \\mathbb{R}^n$ can be sent to a scalar output $f(x)$, as in a loss function, or to another vector output $F(x)$, as in a physical state update. The notation expands, but the modeling principle remains unchanged: defined inputs, interpretable outputs, and a rule that links them.'
      ],
      sources: [
        { label: 'LibreTexts', href: 'https://math.libretexts.org', note: 'Function language, multiple representations, and algebra review.' },
        { label: 'OpenStax', href: 'https://openstax.org/subjects/math', note: 'Precalculus framing for functions, inverses, and transformations.' },
        { label: 'MIT OpenCourseWare', href: 'https://ocw.mit.edu', note: 'Modeling mindset and variable interpretation.' }
      ],
      practiceSkills: [
        { label: 'Differentiate simple monomials', templateIds: ['calc-power-rule-1', 'calc-power-rule-2'] },
        { label: 'Interpret composite transformations', templateIds: ['calc-chain-rule-1'] }
      ],
      moveOnThreshold: 90
    },
    {
      id: 'vectors-matrices',
      slug: 'vectors-matrices',
      title: 'Vectors and matrices',
      summary: 'Shared linear algebra language for forces, data tables, and parameter spaces.',
      conceptualOverview: [
        'Vectors and matrices matter because many real problems involve several quantities changing together. A force has components, a dataset has many features, and a model has many parameters. Scalar arithmetic is too cramped for that world. Linear algebra gives us a language that treats whole collections of related quantities as single mathematical objects.',
        'One intuitive point of view treats a vector as an arrow. In physics and engineering, this is often the right first picture because direction and magnitude both matter. Velocity, force, and electric field are easier to reason about when you imagine orientation in space. The arrow perspective makes geometric ideas like angle, projection, and orthogonality feel concrete.',
        'A second point of view treats a vector as an ordered list of measurements. This is often the more natural ML perspective. A user profile, an image embedding, or a row of sensor readings may not look like an arrow in physical space, but it is still a vector because each coordinate carries information in a fixed slot. Meaning comes from position in the list, not from drawing it on paper.',
        'Matrices then become the operators that act on vectors. In geometry they can rotate, stretch, reflect, or project. In data science they can aggregate features, encode transitions, or represent linear layers in a model. Thinking of a matrix as an action rather than just a rectangle of numbers is one of the biggest conceptual upgrades students can make.',
        'This topic is also where coordinate systems become intellectually useful rather than merely procedural. The same physical vector can be expressed in different bases, and the same dataset can be described with different feature sets. Choosing coordinates well can simplify a problem dramatically. That is why eigenvectors, principal components, and orthonormal bases show up in both mechanics and ML.',
        'The larger lesson is that linear algebra gives structure to complexity. Instead of tracking dozens of separate scalar equations, we package them into vector and matrix expressions that reveal pattern. That compression is not cosmetic. It exposes symmetry, makes computation efficient, and prepares the way for optimization and multivariable calculus.'
      ],
      mathConnections: [
        'A vector in $\\mathbb{R}^n$ is often written as $$x=\\begin{bmatrix}x_1\\\\x_2\\\\\\vdots\\\\x_n\\end{bmatrix}.$$ The coordinates identify how much of each basis direction is present. In applications, those coordinates may represent spatial components, feature values, or parameter settings.',
        'The dot product $$x \\cdot y = \\sum_{i=1}^n x_i y_i$$ produces a scalar summary of alignment. When the vectors are normalized, it becomes closely tied to the cosine of the angle between them. That is why dot products appear in projections, similarity search, and work calculations.',
        'Matrix-vector multiplication builds each output coordinate as a weighted sum: if $A \\in \\mathbb{R}^{m \\times n}$ and $x \\in \\mathbb{R}^n$, then $(Ax)_i=\\sum_{j=1}^n a_{ij}x_j$. This formula explains both the computational pattern and the modeling meaning: rows of the matrix define how inputs are combined into outputs.',
        'Linear transformations preserve vector addition and scalar multiplication, meaning $A(x+y)=Ax+Ay$ and $A(cx)=cAx$. These identities are why linear models are so tractable. They let us analyze systems by understanding what happens to basis vectors and then extending the result to all vectors.',
        'Eigenvectors satisfy $$Av=\\lambda v.$$ This means the transformation sends certain special directions back onto themselves, only scaled. In dynamics, these directions can reveal stable or unstable modes. In ML and data analysis, related ideas explain principal directions of variation and repeated-update behavior.',
        'Norms measure size. The Euclidean norm $$\\lVert x \\rVert_2 = \\sqrt{x_1^2+\\cdots+x_n^2}$$ generalizes distance from the origin, while other norms emphasize different notions of magnitude. Optimization, regularization, and numerical stability all depend on the fact that “size” can be defined in more than one mathematically useful way.'
      ],
      sources: [
        { label: 'OpenStax', href: 'https://openstax.org/subjects/math', note: 'Linear algebra fundamentals.' },
        { label: 'MIT OpenCourseWare', href: 'https://ocw.mit.edu', note: 'Geometric interpretation of linear transformations.' },
        { label: 'Deep Learning Book', href: 'https://www.deeplearningbook.org', note: 'Vectorized computation and matrix notation in ML.' }
      ],
      practiceSkills: [
        { label: 'Reason about eigendirections', templateIds: ['lin-eigen-1', 'lin-eigen-2'] }
      ],
      moveOnThreshold: 90
    }
  ]
}

export const engineeringTrack: Track = {
  id: 'engineering',
  slug: 'engineering',
  title: 'Engineering',
  audience: 'Students building mathematical fluency for engineering systems.',
  description: 'Calculus, differential equations, and modeling with explicit conceptual pages, math pages, and adaptive practice.',
  units: [
    sharedFoundationsUnit,
    {
      id: 'eng-calc-1',
      slug: 'unit1-calc1',
      title: 'Unit 1 — Calculus I',
      summary: 'Limits, derivatives, and integrals anchored in rates of change and accumulation.',
      order: 1,
      estimatedMinutes: 220,
      shared: false,
      sections: [
        {
          id: 'limits-continuity',
          slug: 'limits-continuity',
          title: 'Limits and continuity',
          summary: 'Approaching a value, understanding local behavior, and distinguishing existence from substitution.',
          conceptualOverview: [
            'A limit is calculus learning how to ask a better question. Instead of asking for the value of a function exactly at a point, it asks what value the function is approaching nearby. That shift matters because many important models become interesting precisely where direct substitution fails, where a formula changes pieces, or where a physical parameter approaches an operating threshold.',
            'One point of view is cinematic. Imagine replaying a process frame by frame as the input gets closer and closer to a target. The limit captures the trend of the outputs during that approach. This perspective is especially useful in engineering, where measurements are often approximate and what matters is the nearby behavior, not just one isolated point.',
            'A second point of view is algebraic simplification. Some expressions hide their true behavior behind a removable problem, such as a factor that makes direct substitution produce $0/0$. By simplifying before evaluating, we reveal the underlying trend. This teaches that indeterminate forms are not final answers; they are signals that more structure is waiting to be uncovered.',
            'A third point of view is local modeling. Limits let us describe whether a system behaves smoothly enough for later tools like derivatives to make sense. If a quantity jumps abruptly, the limit from the left may not match the limit from the right. Continuity is therefore not just a formal checkbox. It encodes whether a model behaves coherently around an operating point.',
            'Continuity also helps connect mathematics to trust. Engineers want formulas that do not predict impossible teleportation in position or sudden unexplained jumps in temperature. ML practitioners care about continuity because smooth objectives and activations often lead to more stable optimization. A continuous model is not always the right model, but continuity provides a powerful baseline expectation.',
            'The conceptual climax is that limits are the doorway to calculus itself. They let us define derivatives as limits of difference quotients and integrals as limits of sums. Without the notion of approaching, we would have formulas but not a rigorous language for instantaneous change or accumulation from infinitely many tiny pieces.'
          ],
          mathConnections: [
            'The basic notation $$\\lim_{x \\to a} f(x)=L$$ means that as $x$ gets arbitrarily close to $a$, the values of $f(x)$ get arbitrarily close to $L$. The statement does not require $x=a$, and in fact the function can even be undefined at $a$ while the limit still exists.',
            'One-sided limits separate the two directions of approach: $$\\lim_{x \\to a^-} f(x) \quad \text{and} \quad \\lim_{x \\to a^+} f(x).$$ A two-sided limit exists only when both one-sided limits exist and are equal. This is the mathematical version of checking for a jump at a boundary.',
            'Continuity at $x=a$ requires three pieces to line up: $f(a)$ exists, $\\lim_{x \\to a} f(x)$ exists, and $$\\lim_{x \\to a} f(x)=f(a).$$ This compact condition packages the intuitive phrase “no break at the point” into a testable mathematical criterion.',
            'A classic removable-discontinuity example is $$f(x)=\\frac{x^2-1}{x-1}.$$ Direct substitution at $x=1$ gives $0/0$, but factoring shows $f(x)=x+1$ for $x \\ne 1$, so $$\\lim_{x \\to 1} \\frac{x^2-1}{x-1}=2.$$ The limit reveals the nearby behavior even though the original formula is undefined at the point.',
            'When substitution into a quotient gives an indeterminate form such as $0/0$ or $\\infty/\\infty$, L’Hôpital’s rule may apply: $$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f\'(x)}{g\'(x)}$$ if the hypotheses are satisfied. The key is that the rule is a carefully earned shortcut, not a first move for every limit.',
            'Limits also prepare derivative notation. The derivative at $a$ is defined by $$f\'(a)=\\lim_{h \\to 0} \\frac{f(a+h)-f(a)}{h}.$$ This formula shows exactly how the secant slope becomes a tangent slope: by shrinking the input change $h$ toward zero.'
          ],
          sources: [
            { label: 'LibreTexts', href: 'https://math.libretexts.org', note: 'Limit laws and continuity examples.' },
            { label: 'OpenStax', href: 'https://openstax.org/subjects/math', note: 'Calculus volume treatment of limits.' }
          ],
          practiceSkills: [
            { label: 'Differentiate nearby algebraic forms', templateIds: ['calc-power-rule-1'] }
          ],
          moveOnThreshold: 90
        },
        {
          id: 'derivative-rules',
          slug: 'derivative-rules',
          title: 'Derivative rules',
          summary: 'Power, product, quotient, and chain rule fluency for engineering rate-of-change questions.',
          conceptualOverview: [
            'The derivative measures sensitivity. It answers the question: if I nudge the input a tiny amount, how does the output respond right now? In engineering, that can mean how fast position changes with time, how current changes with voltage, or how stress responds to strain. In ML, it can mean how the loss changes when a parameter changes. The unifying idea is local responsiveness.',
            'One point of view is motion. If a position function tells where an object is, then its derivative tells how fast that position is changing at an instant. This is the physical interpretation many students meet first, and it remains powerful because it keeps the symbols attached to real behavior. Velocity and acceleration are not separate mysteries; they are successive derivatives of position.',
            'A second point of view is local linear approximation. Near a point, many smooth functions behave almost like lines. The derivative is the slope of that best nearby line. This perspective explains why derivatives are useful far beyond motion: they let us approximate, estimate, and control complicated systems using a simpler local picture.',
            'A third point of view is sensitivity analysis. In a model with many assumptions, the derivative tells which inputs matter most at the current operating point. Engineers use that to understand tolerances and stability. ML practitioners use it to train models, because gradients reveal how parameter changes will affect error. The derivative is therefore both descriptive and actionable.',
            'Derivative rules are important because first principles alone are too slow for realistic work. Once the limit definition establishes what a derivative means, the power, product, quotient, and chain rules let us scale up to composite formulas that arise in actual models. The rules are not arbitrary tricks; each one reflects a structural pattern in how functions combine.',
            'The final conceptual shift is paying attention to units and meaning. If displacement is measured in meters and time in seconds, then the derivative has units of meters per second. If a loss function changes per parameter update, the derivative has a different interpretation. Carrying units and context helps students avoid the trap of treating derivatives as purely symbolic decoration.'
          ],
          mathConnections: [
            'The derivative is defined by the limit $$f\'(x)=\\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h}.$$ This quotient starts as an average rate of change over a tiny interval and becomes an instantaneous rate of change as the interval width shrinks toward zero.',
            'The power rule says $$\\frac{d}{dx}x^n = nx^{n-1}.$$ More generally, if $f(x)=ax^n$, then $f\'(x)=anx^{n-1}$. This rule underlies a huge fraction of early calculus computations because polynomial models appear everywhere.',
            'Products and quotients require their own structure-aware rules: $$\\frac{d}{dx}[u(x)v(x)] = u\'(x)v(x)+u(x)v\'(x),$$ and $$\\frac{d}{dx}\\left[\\frac{u(x)}{v(x)}\\right] = \\frac{u\'(x)v(x)-u(x)v\'(x)}{[v(x)]^2}.$$ These formulas remind us that differentiation interacts with algebra in patterned but nontrivial ways.',
            'The chain rule handles composition: $$\\frac{d}{dx}f(g(x)) = f\'(g(x))g\'(x).$$ Conceptually, it multiplies the rate of change of the outer response by the rate of change of the inner input. This is the rule that makes nested engineering formulas and backpropagation-style ML calculations possible.',
            'A local linear approximation near $x=a$ is $$f(x) \\approx f(a)+f\'(a)(x-a).$$ This formula is one reason derivatives matter so much. It turns a complicated curve into a line that is often good enough for estimation over a small range.',
            "Higher derivatives deepen the interpretation. If $x(t)$ is position, then $x'(t)$ is velocity and $x^{\\prime\\prime}(t)$ is acceleration. In optimization, first derivatives indicate direction of change, while second derivatives help describe curvature and whether the local landscape bends upward or downward."
          ],
          sources: [
            { label: 'LibreTexts', href: 'https://math.libretexts.org', note: 'Core derivative rule worked examples.' },
            { label: 'OpenStax', href: 'https://openstax.org/subjects/math', note: 'Rule-based differentiation and interpretation.' },
            { label: 'MIT OpenCourseWare', href: 'https://ocw.mit.edu', note: 'Conceptual framing for rates and local linearity.' }
          ],
          practiceSkills: [
            { label: 'Power rule fluency', templateIds: ['calc-power-rule-1', 'calc-power-rule-2', 'calc-power-rule-3'] },
            { label: 'Chain rule fluency', templateIds: ['calc-chain-rule-1', 'calc-chain-rule-2', 'calc-chain-rule-3'] }
          ],
          moveOnThreshold: 90
        },
        {
          id: 'integral-accumulation',
          slug: 'integral-accumulation',
          title: 'Integrals and accumulation',
          summary: 'Net area, antiderivatives, and accumulation functions that reverse differentiation.',
          conceptualOverview: [
            'If derivatives answer “how fast is something changing right now,” integrals answer “how much total change has built up over time or across space.” That makes them natural for questions about total distance, total charge, total mass, or total cost. Integration is the mathematics of accumulation, and it turns rates back into totals.',
            'One point of view is geometric. A definite integral can be seen as signed area under a curve, with regions below the axis counted negatively. This picture is valuable because it gives a shape-based intuition for what accumulation means. The integral is not merely an algebraic command; it measures the total contribution of many thin slices.',
            'A second point of view is physical bookkeeping. If current measures charge flow per unit time, integrating current over time gives total charge transferred. If velocity measures displacement per unit time, integrating velocity recovers net displacement. This “rate times tiny interval, added up” viewpoint is often the most meaningful for engineers.',
            'A third point of view is reversal. Antidifferentiation asks which family of functions has a given derivative. This reveals a deep duality: differentiation and integration are inverse processes in a precise sense. The Fundamental Theorem of Calculus is powerful because it connects these two stories—accumulation and reversal—into one coherent system.',
            'Students often find integrals difficult because there are really two linked ideas: definite integrals as totals and indefinite integrals as antiderivative families. The constant of integration appears because many functions can share the same derivative. Recognizing when you are talking about a total versus a family of functions clears up a great deal of confusion.',
            'In applied work, the integral also teaches patience with approximation. Before there is a closed-form answer, there is usually a sum of many small contributions. That mindset is foundational not only in calculus but in numerical analysis, probability, and even modern training procedures that aggregate information over many examples and steps.'
          ],
          mathConnections: [
            'A definite integral is written as $$\\int_a^b f(x)\\,dx.$$ Here $f(x)$ is the quantity being accumulated and $dx$ indicates the variable of integration. The expression represents net signed accumulation from $x=a$ to $x=b$.',
            'Riemann-sum thinking starts from finite approximations: $$\\sum_{i=1}^n f(x_i^*)\\Delta x.$$ As the partition is refined and $\\Delta x$ becomes very small, this sum approaches the definite integral. This is the formal version of adding up many tiny contributions.',
            'An indefinite integral records antiderivatives: $$\\int f(x)\\,dx = F(x)+C,$$ where $F\'(x)=f(x).$$ The constant $C$ matters because differentiating any constant gives zero, so an entire family of functions can share the same derivative.',
            'The Fundamental Theorem of Calculus links accumulation and differentiation. If $F\'(x)=f(x)$, then $$\\int_a^b f(x)\\,dx = F(b)-F(a).$$ This is the payoff theorem that turns many area or accumulation problems into endpoint evaluation.',
            'Substitution reverses composition, mirroring the chain rule. If $u=g(x)$, then $$\\int f(g(x))g\'(x)\\,dx = \\int f(u)\\,du.$$ The rule works because the derivative-like inner factor accounts for how the new variable changes.',
            'Interpretation depends on the integrand. If $v(t)$ is velocity, then $$\\int_a^b v(t)\\,dt$$ gives net displacement, while integrating speed would give total distance traveled. The formula may look similar in both cases, but the physical meaning changes with the quantity being accumulated.'
          ],
          sources: [
            { label: 'LibreTexts', href: 'https://math.libretexts.org', note: 'FTC and substitution examples.' },
            { label: 'OpenStax', href: 'https://openstax.org/subjects/math', note: 'Accumulation function interpretations.' }
          ],
          practiceSkills: [
            { label: 'Chain-rule structure recognition', templateIds: ['calc-chain-rule-2', 'calc-chain-rule-3'] }
          ],
          moveOnThreshold: 90
        }
      ]
    }
  ]
}

export const csmlTrack: Track = {
  id: 'cs-ml-ai',
  slug: 'cs-ml-ai',
  title: 'CS & ML',
  audience: 'Learners connecting mathematical ideas to machine learning systems.',
  description: 'Linear algebra, probability, optimization, and calculus with expansive conceptual notes and adaptive practice.',
  units: [
    sharedFoundationsUnit,
    {
      id: 'cs-probability',
      slug: 'unit2-probability',
      title: 'Unit 2 — Probability & Statistics',
      summary: 'Conditional reasoning, Bayes, expectation, and uncertainty for model-based decisions.',
      order: 2,
      estimatedMinutes: 210,
      shared: false,
      sections: [
        {
          id: 'bayesian-reasoning',
          slug: 'bayesian-reasoning',
          title: 'Bayesian reasoning',
          summary: 'How priors and evidence combine into posterior beliefs.',
          conceptualOverview: [
            'Bayesian reasoning is the mathematics of learning from evidence. Instead of treating probability as a static label, it treats probability as a belief state that can be revised when new information arrives. This makes Bayes’ theorem much more than a formula: it is a disciplined way to update what you think in light of what you observe.',
            'One point of view is diagnostic reasoning. A doctor starts with a prior belief about how common a disease is, then updates after seeing a test result. The theorem helps separate “how likely a positive test is if the disease is present” from “how likely the disease is if the test is positive.” That reversal is exactly where human intuition often goes wrong.',
            'A second point of view is model comparison. Several explanations may compete to account for the same evidence. Bayesian reasoning weighs each explanation by combining how plausible it was beforehand with how well it predicts what was observed. This viewpoint is central in statistics and ML, where models are often judged by how well they explain data relative to alternatives.',
            'A third point of view is uncertainty management. In ML systems, inputs are noisy, labels may be imperfect, and the world can shift. Bayesian thinking offers a language for carrying uncertainty forward rather than pretending it disappears. Even when a full Bayesian treatment is not used computationally, the conceptual habit of separating prior assumptions from data evidence is deeply valuable.',
            'Bayes also teaches humility about rare events. A highly accurate test can still produce many false alarms when the underlying event is uncommon. That is not a paradox; it is a base-rate effect. Understanding this prevents overconfident conclusions in medicine, security, spam filtering, and many model-evaluation scenarios.',
            'The broader conceptual payoff is that Bayesian reasoning unifies belief, evidence, and revision. It gives a transparent account of why a conclusion changed. In a time when many systems make probabilistic recommendations, that clarity is not just mathematically elegant; it is practically important.'
          ],
          mathConnections: [
            'Bayes’ theorem is $$P(A \\mid B)=\\frac{P(B \\mid A)P(A)}{P(B)}.$$ The posterior $P(A \\mid B)$ is the updated belief about $A$ after observing $B$. The numerator combines the prior belief $P(A)$ with the likelihood $P(B \\mid A)$.',
            'The denominator $P(B)$ is the evidence term, and it normalizes across all ways the observation could occur. In a partition $A_1,\\dots,A_n$, it can be written as $$P(B)=\\sum_{i=1}^n P(B \\mid A_i)P(A_i).$$ This is why Bayes is often described as “reweighting competing explanations.”',
            'A common reasoning error is to confuse $P(A \\mid B)$ with $P(B \\mid A)$. These quantities answer different questions. For example, the chance of testing positive given a disease is not the same as the chance of having the disease given a positive test.',
            'Posterior odds can be read multiplicatively: prior odds are updated by a likelihood ratio. That perspective is especially useful when comparing two hypotheses, because it emphasizes how strongly the evidence favors one explanation over another.',
            'In classification, Bayes can be expressed as $$P(y \\mid x) \\propto P(x \\mid y)P(y).$$ The symbol $\\propto$ highlights that the posterior is proportional to likelihood times prior before normalization. This is the compact form often used in ML derivations.',
            'The theorem also interacts naturally with conditional independence assumptions. Naive Bayes, for instance, assumes features are conditionally independent given the class, turning a complicated likelihood into a product of simpler factors. The assumption is strong, but it often yields surprisingly effective baseline models.'
          ],
          sources: [
            { label: 'OpenStax', href: 'https://openstax.org/subjects/math', note: 'Conditional probability and Bayes basics.' },
            { label: 'LibreTexts', href: 'https://math.libretexts.org', note: 'Worked Bayes examples and probability trees.' },
            { label: 'Deep Learning Book', href: 'https://www.deeplearningbook.org', note: 'Probabilistic modeling mindset.' }
          ],
          practiceSkills: [
            { label: 'Compute posteriors', templateIds: ['prob-bayes-1', 'prob-bayes-2', 'prob-bayes-3'] }
          ],
          moveOnThreshold: 90
        },
        {
          id: 'expectation-risk',
          slug: 'expectation-risk',
          title: 'Expectation and risk',
          summary: 'Expected value as a weighted average and as a decision-making tool.',
          conceptualOverview: [
            'Expectation formalizes the idea of an average when outcomes occur with different probabilities. Rather than counting every outcome equally, it weights each outcome by how likely it is. This gives a single summary of what tends to happen in the long run, even when no individual trial looks exactly like the average.',
            'One point of view is repeated sampling. If you could repeat a random experiment many times under the same conditions, the empirical average would tend to stabilize near the expected value. This perspective connects expectation to frequency and makes the notion feel less abstract.',
            'A second point of view is decision-making under uncertainty. A rational choice often depends not on the best possible outcome or the worst possible outcome alone, but on the weighted average consequence. This is why expectation appears in finance, engineering reliability, and algorithm design as a tool for comparing uncertain options.',
            'A third point of view is machine learning risk. A loss function measures how wrong a model is on one example, while expected loss measures average wrongness over the data-generating process. The goal of training is often to reduce this expectation, even though we only ever see samples from the full distribution.',
            'Expectation also teaches an important caution: average is not the same as typical. A distribution can have an expected value that very few outcomes ever equal. For skewed or heavy-tailed situations, expectation is still useful, but it must be interpreted alongside spread, uncertainty, and tail behavior.',
            'The conceptual payoff is that expectation turns randomness into something calculable without pretending the randomness vanished. It preserves uncertainty while still allowing principled summaries, comparisons, and optimization. That balance is why it sits at the center of modern probability and ML.'
          ],
          mathConnections: [
            'For a discrete random variable $X$, expectation is $$\\mathbb{E}[X]=\\sum_x x \, P(X=x).$$ Each possible value contributes in proportion to its probability. This is why expectation is often described as a weighted average rather than an ordinary arithmetic mean.',
            'For continuous variables, the sum becomes an integral: $$\\mathbb{E}[X]=\\int_{-\\infty}^{\\infty} x f_X(x)\\,dx,$$ where $f_X$ is the density. The same conceptual idea survives the notation change: accumulate value times likelihood across the full range of outcomes.',
            'Linearity of expectation is one of the most useful facts in probability: $$\\mathbb{E}[X+Y]=\\mathbb{E}[X]+\\mathbb{E}[Y].$$ More generally, constants pull out and sums split apart. This property works whether or not the variables are independent, which makes it unexpectedly powerful.',
            'Expected loss in ML is often written as $$R(f)=\\mathbb{E}[\\ell(f(X),Y)].$$ Here $\\ell$ is the loss on one example, and $R(f)$ is the average risk over the data distribution. Training approximates this ideal quantity with sample averages computed from observed data.',
            'Variance measures spread around expectation: $$\\operatorname{Var}(X)=\\mathbb{E}[(X-\\mathbb{E}[X])^2].$$ Two random variables can share the same expected value while behaving very differently in reliability, volatility, or concentration.',
            'Indicator variables reveal another elegant use of expectation. If $I$ equals $1$ when an event occurs and $0$ otherwise, then $$\\mathbb{E}[I]=P(I=1).$$ This simple identity powers counting arguments, probabilistic proofs, and many model-evaluation calculations.'
          ],
          sources: [
            { label: 'OpenStax', href: 'https://openstax.org/subjects/math', note: 'Expectation and variance foundations.' },
            { label: 'MIT OpenCourseWare', href: 'https://ocw.mit.edu', note: 'Probabilistic modeling and expected value examples.' }
          ],
          practiceSkills: [
            { label: 'Posterior and expectation numeracy', templateIds: ['prob-bayes-2'] }
          ],
          moveOnThreshold: 90
        }
      ]
    },
    {
      id: 'cs-optimization',
      slug: 'unit3-optimization',
      title: 'Unit 3 — Optimization',
      summary: 'Convexity, gradients, and iterative updates for training models.',
      order: 3,
      estimatedMinutes: 180,
      shared: false,
      sections: [
        {
          id: 'gradient-descent',
          slug: 'gradient-descent',
          title: 'Gradient descent',
          summary: 'Following the negative gradient to reduce an objective function.',
          conceptualOverview: [
            'Gradient descent is the core idea that if you know which direction makes a function increase most steeply, then stepping in the opposite direction should reduce it. That sounds almost obvious, but it becomes the engine behind a vast amount of modern optimization, especially in machine learning where explicit formulas for optimal parameters are rarely available.',
            'One point of view is geometric. Imagine standing on a hilly landscape representing the loss surface. The gradient is the uphill arrow at your current location, so its negative points downhill. Gradient descent repeatedly reads the local slope and takes a step, gradually moving toward lower terrain.',
            'A second point of view is algorithmic. Rather than solving one giant equation exactly, we improve the answer through iteration. That makes the method flexible enough for huge parameter spaces, streaming data, and objectives that would be hopeless to optimize in closed form. Each update is small, but repeated updates can accomplish large-scale learning.',
            'A third point of view is approximation. The method works because a smooth function looks nearly linear in a small neighborhood, and moving opposite the gradient decreases that local linear model. This explains why learning rate matters so much: the local picture is only trustworthy for sufficiently small steps.',
            'Gradient descent also teaches an important lesson about tradeoffs. Small learning rates are cautious and stable but slow. Large learning rates are ambitious but can overshoot or even diverge. Practical optimization is therefore not just about direction; it is about matching step size to curvature, noise, and scale.',
            'In ML, the deeper significance is that gradient descent connects calculus to learning. Gradients tell a model how to change itself in response to mistakes. That is why this topic feels like the hinge between pure math and intelligent systems: the derivative becomes an update rule, and the update rule becomes training.'
          ],
          mathConnections: [
            'In one dimension, the update rule is $$x_{k+1}=x_k-\\eta f\'(x_k).$$ In multiple dimensions it becomes $$x_{k+1}=x_k-\\eta \\nabla f(x_k).$$ The learning rate $\\eta$ controls how far we move each step.',
            'The gradient $\\nabla f(x)$ points in the direction of steepest local increase, so $-\\nabla f(x)$ points toward steepest local decrease. This is a geometric statement about local behavior, not a guarantee of immediate global success.',
            'A first-order approximation explains the update logic: $$f(x+\\Delta x) \\approx f(x)+\\nabla f(x)^T \\Delta x.$$ Choosing $\\Delta x=-\\eta \\nabla f(x)$ makes the linear term negative, suggesting a decrease for sufficiently small $\\eta$.',
            'Learning-rate stability depends on curvature. On a quadratic objective like $$f(x)=ax^2,$$ the derivative is $f\'(x)=2ax$, so the update becomes $$x_{k+1}=(1-2a\\eta)x_k.$$ This formula makes stability visible: if the multiplier is too large in magnitude, the iterates oscillate or diverge.',
            'Batch, stochastic, and mini-batch variants differ in how the gradient is estimated. Full-batch descent uses the exact gradient over the dataset, while stochastic methods use noisy estimates from one or a few samples. The math changes from exact descent to descent in expectation, but the update principle stays recognizable.',
            'Convergence guarantees become stronger on convex objectives. When $f$ is convex and smooth, gradient descent can often be shown to approach a global minimum under appropriate step-size conditions. Outside the convex world, the method may still work extremely well, but the theory becomes more delicate.'
          ],
          sources: [
            { label: 'MIT OpenCourseWare', href: 'https://ocw.mit.edu', note: 'Optimization lectures and gradient intuition.' },
            { label: 'Deep Learning Book', href: 'https://www.deeplearningbook.org', note: 'First-order optimization for ML.' }
          ],
          practiceSkills: [
            { label: 'Single-step updates', templateIds: ['opt-gradient-descent-1', 'opt-gradient-descent-2', 'opt-gradient-descent-3'] }
          ],
          moveOnThreshold: 90
        },
        {
          id: 'convexity',
          slug: 'convexity',
          title: 'Convexity',
          summary: 'Why bowl-shaped objectives are easier to optimize and reason about.',
          conceptualOverview: [
            'Convexity is one of the most important structural assumptions in optimization because it turns local information into global confidence. If an objective is convex, then any local minimum is automatically a global minimum. That single fact removes much of the ambiguity that makes optimization hard.',
            'One point of view is geometric shape. A convex function looks bowl-like in the sense that the line segment between any two points on the graph lies above the graph itself. This picture is intuitive and helps students recognize why there are no deceptive valleys hiding a lower solution elsewhere.',
            'A second point of view is interpolation. If you average two inputs, the function value at that average is no greater than the average of the two function values. This says mixing solutions does not create an unexpectedly bad result, which is a powerful property in decision-making and optimization theory.',
            'A third point of view is reliability. In many applied settings, you do not just want a method that often works; you want one whose guarantees are understandable. Convexity gives that reliability. It lets algorithm designers prove convergence rates and lets practitioners trust that descent methods are not merely lucky.',
            'Convexity also clarifies why some modern ML problems are difficult. Deep networks often optimize highly nonconvex objectives, which is one reason training requires heuristics, initialization strategies, and empirical tuning. Learning convexity first is not outdated; it provides the baseline against which harder landscapes become understandable.',
            'The broad conceptual lesson is that shape governs solvability. Optimization is not only about formulas and algorithms but about the geometry of the objective. Convexity is the cleanest case where the geometry is favorable, and studying it sharpens intuition for both easy and hard optimization problems.'
          ],
          mathConnections: [
            'A set $C$ is convex if for any $x,y \\in C$ and any $t \\in [0,1]$, the point $$tx+(1-t)y$$ also lies in $C$. This definition says the entire line segment between any two points in the set remains inside the set.',
            'A function $f$ is convex on a convex domain if $$f(tx+(1-t)y) \\le t f(x) + (1-t) f(y)$$ for all $x,y$ in the domain and all $t \\in [0,1]$. This inequality is the formal version of the bowl-shape intuition.',
            "In one variable, differentiable convex functions have increasing slopes. If $f$ is twice differentiable, a common test is $$f''(x) \\\\ge 0.$$ In multiple dimensions, the analogous condition is that the Hessian matrix is positive semidefinite.",
            'The first-order characterization says $$f(y) \\ge f(x)+\\nabla f(x)^T(y-x).$$ Geometrically, this means the tangent line or tangent plane lies below the graph everywhere. That property is one reason gradients become such informative global guides on convex objectives.',
            'A central optimization consequence is that any point with zero gradient is globally optimal for a differentiable convex function. This is much stronger than in general nonconvex settings, where a zero gradient could indicate a maximum or saddle point instead.',
            'Quadratic objectives provide a concrete example. If $$f(x)=\\frac{1}{2}x^TQx+b^Tx+c$$ and the matrix $Q$ is positive semidefinite, then $f$ is convex. Many least-squares and regularized optimization problems fit this template, which is why convexity appears so often in foundational applied mathematics.'
          ],
          sources: [
            { label: 'MIT OpenCourseWare', href: 'https://ocw.mit.edu', note: 'Convex optimization intuition and examples.' },
            { label: 'Deep Learning Book', href: 'https://www.deeplearningbook.org', note: 'Optimization landscape framing.' }
          ],
          practiceSkills: [
            { label: 'Global-vs-local minima reasoning', templateIds: ['opt-gradient-descent-3'] }
          ],
          moveOnThreshold: 90
        }
      ]
    }
  ]
}

export const tracks = [engineeringTrack, csmlTrack]

export const trackRegistry = Object.fromEntries(tracks.map((track) => [track.slug, track])) as Record<string, Track>

export const getUnit = (trackSlug: string, unitSlug: string) => trackRegistry[trackSlug]?.units.find((unit) => unit.slug === unitSlug)

export const getSection = (trackSlug: string, unitSlug: string, sectionSlug: string) =>
  getUnit(trackSlug, unitSlug)?.sections.find((section) => section.slug === sectionSlug)
