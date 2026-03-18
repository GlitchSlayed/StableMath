A definite integral is written as $$\\int_a^b f(x)\\,dx.$$ Here $f(x)$ is the quantity being accumulated and $dx$ indicates the variable of integration. The expression represents net signed accumulation from $x=a$ to $x=b$.

Riemann-sum thinking starts from finite approximations: $$\\sum_{i=1}^n f(x_i^*)\\Delta x.$$ As the partition is refined and $\\Delta x$ becomes very small, this sum approaches the definite integral. This is the formal version of adding up many tiny contributions.

An indefinite integral records antiderivatives: $$\\int f(x)\\,dx = F(x)+C,$$ where $F'(x)=f(x).$$ The constant $C$ matters because differentiating any constant gives zero, so an entire family of functions can share the same derivative.

The Fundamental Theorem of Calculus links accumulation and differentiation. If $F'(x)=f(x)$, then $$\\int_a^b f(x)\\,dx = F(b)-F(a).$$ This is the payoff theorem that turns many area or accumulation problems into endpoint evaluation.

Substitution reverses composition, mirroring the chain rule. If $u=g(x)$, then $$\\int f(g(x))g'(x)\\,dx = \\int f(u)\\,du.$$ The rule works because the derivative-like inner factor accounts for how the new variable changes.

Interpretation depends on the integrand. If $v(t)$ is velocity, then $$\\int_a^b v(t)\\,dt$$ gives net displacement, while integrating speed would give total distance traveled. The formula may look similar in both cases, but the physical meaning changes with the quantity being accumulated.
