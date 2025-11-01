class Buscar{
    buscarValidarDetalhesProdutoBlueTop(){
    cy.get('a[href*="/products"]').click()
    cy.get('[class="title text-center"]').should('contain', 'All Products')
    cy.get('i[class="fa fa-plus-square"]').first().click()
    
    };
    buscarProdutoBlueTop(){
        cy.get('a[href*="/products"]').click()
        cy.get('[class="title text-center"]').should('contain', 'All Products')
        cy.get('[id="search_product"]').type('Blue Top')
        cy.get('[id="submit_search"]').click()
    }


}
export default new Buscar();