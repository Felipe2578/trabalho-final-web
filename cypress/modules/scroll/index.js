class Scroll{
    scrolarParaSubmitions(){
        cy.scrollTo('bottom')
        cy.get('[id="susbscribe_email"]').type(`qa-tester-${Date.now()}@test.com`)
        cy.get('#subscribe').click()
    }

}
export default new Scroll();