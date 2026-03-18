Linear regression is often introduced as curve fitting, but its deeper meaning is geometric. The model chooses a coefficient vector that makes the predicted outputs as close as possible to the observed outputs. That turns fitting into a question about where one vector sits relative to a subspace spanned by the columns of the design matrix.

One point of view is compression. Instead of memorizing every training label independently, the model explains them using a weighted combination of feature columns. If the features are informative, the labels can be approximated with far fewer degrees of freedom than raw lookup would require.

A second point of view is error decomposition. The residual vector measures what the linear model failed to explain. Thinking about regression this way makes diagnostics more meaningful because patterns in the residuals tell you what structure the features are missing.

This topic also connects directly to optimization. Least squares can be solved algebraically in some settings, but it can also be minimized iteratively with gradient methods. That makes linear regression a bridge between exact linear algebra and the broader world of numerical training.
