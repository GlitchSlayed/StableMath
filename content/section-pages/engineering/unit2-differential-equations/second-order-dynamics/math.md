A standard linear second-order model is $$m x'' + c x' + kx = f(t).$$ Here $m$ represents inertia, $c$ damping, $k$ stiffness, and $f(t)$ an external forcing term.

The homogeneous equation $$m x'' + c x' + kx = 0$$ leads to the characteristic equation $$mr^2 + cr + k = 0.$$ The roots of this polynomial determine whether the response is overdamped, critically damped, or underdamped.

When $$c^2 - 4mk < 0,$$ the roots are complex and the solution oscillates while decaying. A typical form is $$x(t)=e^{-\alpha t}(C_1\cos \beta t + C_2\sin \beta t).$$ The exponential envelope captures damping while the trigonometric factors capture oscillation.

A forcing term creates a particular solution in addition to the homogeneous response. The full solution is $$x(t)=x_h(t)+x_p(t),$$ which matches the physical idea of natural behavior plus driven behavior.
