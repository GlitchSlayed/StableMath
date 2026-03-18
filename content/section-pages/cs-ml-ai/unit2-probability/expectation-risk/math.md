For a discrete random variable $X$, expectation is $$\\mathbb{E}[X]=\\sum_x x \, P(X=x).$$ Each possible value contributes in proportion to its probability. This is why expectation is often described as a weighted average rather than an ordinary arithmetic mean.

For continuous variables, the sum becomes an integral: $$\\mathbb{E}[X]=\\int_{-\\infty}^{\\infty} x f_X(x)\\,dx,$$ where $f_X$ is the density. The same conceptual idea survives the notation change: accumulate value times likelihood across the full range of outcomes.

Linearity of expectation is one of the most useful facts in probability: $$\\mathbb{E}[X+Y]=\\mathbb{E}[X]+\\mathbb{E}[Y].$$ More generally, constants pull out and sums split apart. This property works whether or not the variables are independent, which makes it unexpectedly powerful.

Expected loss in ML is often written as $$R(f)=\\mathbb{E}[\\ell(f(X),Y)].$$ Here $\\ell$ is the loss on one example, and $R(f)$ is the average risk over the data distribution. Training approximates this ideal quantity with sample averages computed from observed data.

Variance measures spread around expectation: $$\\operatorname{Var}(X)=\\mathbb{E}[(X-\\mathbb{E}[X])^2].$$ Two random variables can share the same expected value while behaving very differently in reliability, volatility, or concentration.

Indicator variables reveal another elegant use of expectation. If $I$ equals $1$ when an event occurs and $0$ otherwise, then $$\\mathbb{E}[I]=P(I=1).$$ This simple identity powers counting arguments, probabilistic proofs, and many model-evaluation calculations.
