A set $C$ is convex if for any $x,y \\in C$ and any $t \\in [0,1]$, the point $$tx+(1-t)y$$ also lies in $C$. This definition says the entire line segment between any two points in the set remains inside the set.

A function $f$ is convex on a convex domain if $$f(tx+(1-t)y) \\le t f(x) + (1-t) f(y)$$ for all $x,y$ in the domain and all $t \\in [0,1]$. This inequality is the formal version of the bowl-shape intuition.



The first-order characterization says $$f(y) \\ge f(x)+\\nabla f(x)^T(y-x).$$ Geometrically, this means the tangent line or tangent plane lies below the graph everywhere. That property is one reason gradients become such informative global guides on convex objectives.

A central optimization consequence is that any point with zero gradient is globally optimal for a differentiable convex function. This is much stronger than in general nonconvex settings, where a zero gradient could indicate a maximum or saddle point instead.

Quadratic objectives provide a concrete example. If $$f(x)=\\frac{1}{2}x^TQx+b^Tx+c$$ and the matrix $Q$ is positive semidefinite, then $f$ is convex. Many least-squares and regularized optimization problems fit this template, which is why convexity appears so often in foundational applied mathematics.
