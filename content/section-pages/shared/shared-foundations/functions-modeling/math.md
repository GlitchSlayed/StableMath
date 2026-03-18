The formal statement is simple: a function $f$ assigns to each input $x$ in a domain exactly one output $f(x)$ in a codomain. That single-output condition is what makes prediction and analysis possible. If a rule produced multiple outputs for the same input, it would not be a well-defined function in the mathematical sense.

Average rate of change on an interval from $x=a$ to $x=b$ is $$\\frac{f(b)-f(a)}{b-a}.$$ This quotient is the slope of the secant line, and it gives an early numerical summary of how responsive the model is over a finite range. It is the bridge from static formulas to dynamic behavior.

Composition is written as $(g \\circ f)(x)=g(f(x))$. The notation matters because it preserves order. If one stage rescales an input and a second stage squares it, reversing the order usually changes the result. Pipelines in engineering and ML live inside this compact notation.

Inverse functions reverse a transformation when the original rule is one-to-one on the domain of interest. Symbolically, if $y=f(x)$ and $f^{-1}$ exists, then $f^{-1}(y)=x$. In practical terms, inverse thinking asks whether you can recover a cause from an observed effect, which is central in calibration and inference.

Multiple representations should agree. A table of values, a graph, and an equation are different windows into the same relationship. If $f(x)=2x+3$, then the slope visible on the graph, the constant increment in a table, and the coefficient of $x$ in the formula all communicate the same linear structure.

Functions also organize later multivariable thinking. A vector-valued input $x \\in \\mathbb{R}^n$ can be sent to a scalar output $f(x)$, as in a loss function, or to another vector output $F(x)$, as in a physical state update. The notation expands, but the modeling principle remains unchanged: defined inputs, interpretable outputs, and a rule that links them.
