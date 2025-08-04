type RAGOptions = {
  query: string;
  documents: string[];
  embed: (text: string) => Promise<number[]>;
  generate: (context: string[], query: string) => Promise<string>;
  topK?: number;
};

function cosineSimilarity(a: number[], b: number[]): number {
  const dot = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const normA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const normB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
  return dot / (normA * normB);
}

export async function runRAG({
  query,
  documents,
  embed,
  generate,
  topK = 3,
}: RAGOptions): Promise<{ reply: string; sources: string[] }> {
  const queryEmbedding = await embed(query);

  const similarities = await Promise.all(
    documents.map(async (doc) => {
      const docEmbedding = await embed(doc);
      return {
        doc,
        score: cosineSimilarity(queryEmbedding, docEmbedding),
      };
    })
  );

  const top = similarities
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map((entry) => entry.doc);

  const reply = await generate(top, query);

  return {
    reply,
    sources: top,
  };
}
