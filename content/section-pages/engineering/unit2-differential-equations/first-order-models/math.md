A standard separable model has the form $$\frac{dy}{dt}=k y.$$ If $k>0$, solutions grow exponentially; if $k<0$, they decay exponentially.

Separation of variables rewrites the equation as $$\frac{1}{y}\,dy = k\,dt.$$ Integrating both sides leads to $$\ln|y| = kt + C,$$ and therefore $$y(t)=Ce^{kt}.$$

Equilibrium solutions satisfy $$\frac{dy}{dt}=0.$$ In a model like $$\frac{dy}{dt}=-k(y-T_\text{env}),$$ the equilibrium is $$y=T_\text{env},$$ which explains why cooling or heating models tend toward ambient conditions.

Initial conditions select one member of the solution family. If $$y(0)=y_0,$$ then for exponential growth or decay the constant becomes $$C=y_0,$$ giving $$y(t)=y_0 e^{kt}.$$
