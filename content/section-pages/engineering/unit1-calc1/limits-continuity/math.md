The basic notation $$\\lim_{x \\to a} f(x)=L$$ means that as $x$ gets arbitrarily close to $a$, the values of $f(x)$ get arbitrarily close to $L$. The statement does not require $x=a$, and in fact the function can even be undefined at $a$ while the limit still exists.

One-sided limits separate the two directions of approach: $$\\lim_{x \\to a^-} f(x) \quad \text{and} \quad \\lim_{x \\to a^+} f(x).$$ A two-sided limit exists only when both one-sided limits exist and are equal. This is the mathematical version of checking for a jump at a boundary.

Continuity at $x=a$ requires three pieces to line up: $f(a)$ exists, $\\lim_{x \\to a} f(x)$ exists, and $$\\lim_{x \\to a} f(x)=f(a).$$ This compact condition packages the intuitive phrase “no break at the point” into a testable mathematical criterion.

A classic removable-discontinuity example is $$f(x)=\\frac{x^2-1}{x-1}.$$ Direct substitution at $x=1$ gives $0/0$, but factoring shows $f(x)=x+1$ for $x \\ne 1$, so $$\\lim_{x \\to 1} \\frac{x^2-1}{x-1}=2.$$ The limit reveals the nearby behavior even though the original formula is undefined at the point.

When substitution into a quotient gives an indeterminate form such as $0/0$ or $\\infty/\\infty$, L’Hôpital’s rule may apply: $$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$$ if the hypotheses are satisfied. The key is that the rule is a carefully earned shortcut, not a first move for every limit.

Limits also prepare derivative notation. The derivative at $a$ is defined by $$f'(a)=\\lim_{h \\to 0} \\frac{f(a+h)-f(a)}{h}.$$ This formula shows exactly how the secant slope becomes a tangent slope: by shrinking the input change $h$ toward zero.
