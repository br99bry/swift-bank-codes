const { join } = require('path');

/**
 * @param {string} countryName - should to be equal to the name file
 * @returns {Object[]} - Swift Array
 */
function getSwiftCodesForCountry(countryName) {
  try {
    const countryFilePath = join(__dirname, '..', 'swiftCodes', `${countryName}.js`);
    const countryModule = require(countryFilePath);
    
    return countryModule;
  } catch (error) {
    console.error(`Error al obtener los códigos SWIFT para ${countryName}:`, error);
    return null;
  }
}

// Exporta la función para obtener los códigos SWIFT de un país específico
module.exports = {
  getSwiftCodesForCountry
};
