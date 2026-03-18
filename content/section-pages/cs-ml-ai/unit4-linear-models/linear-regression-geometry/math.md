With design matrix $X$, parameter vector $\beta$, and targets $y$, the linear model is written as $$\hat{y}=X\beta.$$ Each column of $X$ is a feature, and each row corresponds to one example.

Least squares minimizes the objective $$\lVert X\beta - y \rVert_2^2.$$ Geometrically, this means choosing $$X\beta$$ to be the closest point in the column space of $X$ to the target vector $y$.

At the optimum, the residual $$r = y - X\beta$$ is orthogonal to every column of $X$. This orthogonality condition leads to the normal equations $$X^T X\beta = X^T y.$$

When $$X^T X$$ is invertible, the closed-form solution is $$\beta = (X^T X)^{-1}X^T y.$$ In practice, numerical methods such as QR factorization or gradient-based updates are often preferred for stability or scale.
