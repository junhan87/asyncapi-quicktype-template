const quicktypeFilter = require('@junhan87/asyncapi-quicktype-filter');

/**
 * Use quicktype to generate messages with their payload.
 */
module.exports = {
  'generate:after': async (generator) => {
    const allMessages = generator.asyncapi.allMessages();
    await quicktypeFilter.generateAllMessagePayloads(
      generator.targetDir,
      generator.templateParams,
      allMessages
    );
  },
};
