Bayes’ theorem is $$P(A \\mid B)=\\frac{P(B \\mid A)P(A)}{P(B)}.$$ The posterior $P(A \\mid B)$ is the updated belief about $A$ after observing $B$. The numerator combines the prior belief $P(A)$ with the likelihood $P(B \\mid A)$.

The denominator $P(B)$ is the evidence term, and it normalizes across all ways the observation could occur. In a partition $A_1,\\dots,A_n$, it can be written as $$P(B)=\\sum_{i=1}^n P(B \\mid A_i)P(A_i).$$ This is why Bayes is often described as “reweighting competing explanations.”

A common reasoning error is to confuse $P(A \\mid B)$ with $P(B \\mid A)$. These quantities answer different questions. For example, the chance of testing positive given a disease is not the same as the chance of having the disease given a positive test.

Posterior odds can be read multiplicatively: prior odds are updated by a likelihood ratio. That perspective is especially useful when comparing two hypotheses, because it emphasizes how strongly the evidence favors one explanation over another.

In classification, Bayes can be expressed as $$P(y \\mid x) \\propto P(x \\mid y)P(y).$$ The symbol $\\propto$ highlights that the posterior is proportional to likelihood times prior before normalization. This is the compact form often used in ML derivations.

The theorem also interacts naturally with conditional independence assumptions. Naive Bayes, for instance, assumes features are conditionally independent given the class, turning a complicated likelihood into a product of simpler factors. The assumption is strong, but it often yields surprisingly effective baseline models.
