A vector in $\\mathbb{R}^n$ is often written as $$x=\\begin{bmatrix}x_1\\\\x_2\\\\\\vdots\\\\x_n\\end{bmatrix}.$$ The coordinates identify how much of each basis direction is present. In applications, those coordinates may represent spatial components, feature values, or parameter settings.

The dot product $$x \\cdot y = \\sum_{i=1}^n x_i y_i$$ produces a scalar summary of alignment. When the vectors are normalized, it becomes closely tied to the cosine of the angle between them. That is why dot products appear in projections, similarity search, and work calculations.

Matrix-vector multiplication builds each output coordinate as a weighted sum: if $A \\in \\mathbb{R}^{m \\times n}$ and $x \\in \\mathbb{R}^n$, then $(Ax)_i=\\sum_{j=1}^n a_{ij}x_j$. This formula explains both the computational pattern and the modeling meaning: rows of the matrix define how inputs are combined into outputs.

Linear transformations preserve vector addition and scalar multiplication, meaning $A(x+y)=Ax+Ay$ and $A(cx)=cAx$. These identities are why linear models are so tractable. They let us analyze systems by understanding what happens to basis vectors and then extending the result to all vectors.

Eigenvectors satisfy $$Av=\\lambda v.$$ This means the transformation sends certain special directions back onto themselves, only scaled. In dynamics, these directions can reveal stable or unstable modes. In ML and data analysis, related ideas explain principal directions of variation and repeated-update behavior.

Norms measure size. The Euclidean norm $$\\lVert x \\rVert_2 = \\sqrt{x_1^2+\\cdots+x_n^2}$$ generalizes distance from the origin, while other norms emphasize different notions of magnitude. Optimization, regularization, and numerical stability all depend on the fact that “size” can be defined in more than one mathematically useful way.
