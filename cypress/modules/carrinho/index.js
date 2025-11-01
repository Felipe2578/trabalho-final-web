class Carrinho{
    adicionandoProdutoAoCarrinho(){
        cy.get('a[href*="/products"]').click()
        cy.get('[class="title text-center"]').should('contain', 'All Products')
        cy.get('i[class="fa fa-plus-square"]').first().click()
        cy.get('[class="btn btn-default cart"]').click()
        cy.get('.modal-content').should('be.visible')
        cy.get('[class="btn btn-success close-modal btn-block"]').click()
        cy.scrollTo('top')
        cy.get('[class="fa fa-shopping-cart"]').first().click()
        cy.get('[class="btn btn-default check_out"]').click()
    }
}
export default new Carrinho();