describe('Perform api tests', () => {
    it('#1 When user get random fact about cats #Then proper response should be returned', () => {
        cy.request('https://catfact.ninja/fact').then(response => {
            assert(response.status === 200, `Expected: ${response.status} to equal: 200`)
            assert((typeof response.body.fact === 'string') && response.body.fact != '', `Fact field equal: ${response.body.fact}`)
            assert((typeof response.body.length === 'number') && response.body.length > 0, `Length field equal: ${response.body.length}`)
        })
    })
})