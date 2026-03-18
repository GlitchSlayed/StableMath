A vector embedding assigns each item $i$ to a point $$e_i \in \mathbb{R}^d.$$ The dimension $d$ controls how much representational capacity the space has.

Similarity is often computed with a dot product $$e_i^T e_j$$ or cosine similarity $$\frac{e_i^T e_j}{\lVert e_i \rVert \lVert e_j \rVert}.$$ Cosine similarity isolates angular alignment, making it useful when vector magnitude is less important than direction.

Distance-based retrieval frequently uses nearest neighbors under a norm such as $$\lVert e_i - e_j \rVert_2.$$ Small distance suggests similar representation, though the choice of metric changes what “near” means.

If embeddings are stored row-wise in a matrix $$E \in \mathbb{R}^{n \times d},$$ then many similarity scores can be computed at once through matrix multiplication. This is one reason vectorized linear algebra is central to large-scale search and recommendation systems.
