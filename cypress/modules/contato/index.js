import { faker } from '@faker-js/faker';
import { getRandomEmail } from '../../support/helpers';
import userData from '../../fixtures/example.json';

class Contato {
    preencherFormularioDeContatoComUploadDeArquivo() {
        cy.get('a[href*="/contact"]').click()
        cy.get('[data-qa="name"]').type(userData.name)
        cy.get('[data-qa="email"]').type(userData.email)
        cy.get('[data-qa="subject"]').type(userData.subject)
        cy.get('[data-qa="message"]').type(userData.message)

        cy.fixture('example.json').as('fileToUpload')
        cy.get('input[type="file"]').selectFile('@fileToUpload')

        cy.get('[data-qa="submit-button"]').click()
    }

}
export default new Contato();