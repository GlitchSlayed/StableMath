In one dimension, the update rule is $$x_{k+1}=x_k-\\eta f'(x_k).$$ In multiple dimensions it becomes $$x_{k+1}=x_k-\\eta \\nabla f(x_k).$$ The learning rate $\\eta$ controls how far we move each step.

The gradient $\\nabla f(x)$ points in the direction of steepest local increase, so $-\\nabla f(x)$ points toward steepest local decrease. This is a geometric statement about local behavior, not a guarantee of immediate global success.

A first-order approximation explains the update logic: $$f(x+\\Delta x) \\approx f(x)+\\nabla f(x)^T \\Delta x.$$ Choosing $\\Delta x=-\\eta \\nabla f(x)$ makes the linear term negative, suggesting a decrease for sufficiently small $\\eta$.

Learning-rate stability depends on curvature. On a quadratic objective like $$f(x)=ax^2,$$ the derivative is $f'(x)=2ax$, so the update becomes $$x_{k+1}=(1-2a\\eta)x_k.$$ This formula makes stability visible: if the multiplier is too large in magnitude, the iterates oscillate or diverge.

Batch, stochastic, and mini-batch variants differ in how the gradient is estimated. Full-batch descent uses the exact gradient over the dataset, while stochastic methods use noisy estimates from one or a few samples. The math changes from exact descent to descent in expectation, but the update principle stays recognizable.

Convergence guarantees become stronger on convex objectives. When $f$ is convex and smooth, gradient descent can often be shown to approach a global minimum under appropriate step-size conditions. Outside the convex world, the method may still work extremely well, but the theory becomes more delicate.
