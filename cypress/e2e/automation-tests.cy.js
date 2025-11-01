import userData from '../fixtures/example.json';
import { faker } from '@faker-js/faker';
import menu from '../modules/menu';
import login from '../modules/login';
import cadastro from '../modules/cadastro';
import carrinho from '../modules/carrinho';
import contato from '../modules/contato';
import buscar from '../modules/buscar';
import scroll from '../modules/scroll';


describe('Automation Exercise', () => {
    beforeEach(() => {
        cy.viewport('iphone-xr')
        cy.visit('https://automationexercise.com/')
        menu.navegarParaLogin();

    });

    //Test 1
    it('Cadastrar um usuario', () => {
        login.preencherFormularioDePreCadastro()
        cadastro.preencherFormularioDeCadastroCompleto()

        //Assert
        cy.url().should('includes', 'account_created')
        cy.contains('b', 'Account Created!').click()
        cy.get('h2[data-qa="account-created"]').should('have.text', 'Account Created!')

    })
    //Test 2
    it('Login do Usuario com e-mail senha corretos', () => {
        login.preencherFormularioDeLogin(userData.user, userData.password)

        //Asserts
        cy.contains('b', userData.name)
        cy.contains(`Logged in as ${userData.name}`).should('be.visible')
    });
    //Test 3
    it('Login de Usuarios com e-mail e senha incorretos', () => {

        login.preencherFormularioDeLogin(userData.user, '54321')
        //Asserts
        cy.get('.login-form > form > p').should('contain', 'Your email or password is incorrect!')

    });
    //Test 4
    it('Logout de Usuario', () => {

        login.preencherFormularioDeLogin(userData.user, userData.password)
        menu.efetuarLogout();
        //Assert
        cy.url().should('contain', 'login')
        cy.contains('Login to your account')
        cy.get('a[href="/logout"').should('not.exist')
        cy.get('a[href="/login"').should('contain', 'Signup / Login')

    });
    //Test 5
    it('Cadastrar Usuario com e-mail existente no sistema', () => {
        // Usar o método específico para cadastro com email existente
        cadastro.preencherCadastroComUsuarioExistente()
        //Assert
        cy.get('.signup-form > form > p').should('contain', 'Email Address already exist!')
    });
    //Test 6
    it('Enviar um Formulario de Contato com upload de arquivo', () => {
        contato.preencherFormularioDeContatoComUploadDeArquivo()

        //assertions
        cy.get('.status').should('be.visible')
        cy.get('.status.alert.alert-success').should('contain', 'Success! Your details have been submitted successfully.')
    });
    //Test 8
    it('Validar os detales do Produto Selecionado', () => {
        buscar.buscarValidarDetalhesProdutoBlueTop()
        //Asserts
        cy.contains('Blue Top').should('be.visible')
        cy.contains('Category: Women > Tops').should('be.visible')
        cy.contains('Availability: In Stock').should('be.visible')
        cy.contains('Condition: New').should('be.visible')
        cy.contains('Brand: Polo').should('be.visible')


    });
    //Test 9
    it('Buscar produtos', () => {
        buscar.buscarProdutoBlueTop()
        //Asserts
        cy.contains('Blue Top')
        cy.get('[class="title text-center"]').should('contain', 'Searched Products')

    });
    //Test 10
    it('Subcription', () => {
        scroll.scrolarParaSubmitions()
        //Assert
        cy.contains('.alert-success', 'You have been successfully subscribed!').should('be.visible')

    });
    //Test 15
    it('Adicionar produtos ao carrinho', () => {
        login.preencherFormularioDePreCadastro()
        cadastro.preencherFormularioDeCadastroCompleto()
        carrinho.adicionandoProdutoAoCarrinho()
        //Assert
        cy.get('[class="address_country_name"]').first().contains('Canada')

    });
});