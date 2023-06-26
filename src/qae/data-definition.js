export default function createDataDefinition(env) {
  const { translator } = env;

  return {
    targets: [
      {
        path: '/qHyperCubeDef',
        dimensions: {
          min: 1,
          max: 1000,
          description(_, __, config) {
            const translationProperty = config && config.type === 'rows'
              ? 'Visualizations.Descriptions.Row'
              : 'Visualizations.Descriptions.Column';
            return translator.get(translationProperty);
          },
        },
        measures: {
          min: 1,
          max: 1000,
          description() {
            return translator.get('Visualizations.Descriptions.Values');
          },
        },
      },
    ],
  };
}
