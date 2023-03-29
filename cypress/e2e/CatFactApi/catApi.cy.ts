describe('Perform api tests', () => {
    it('#1 When user get random fact about cats #Then proper response should be returned - TC5', () => {
        cy.request('GET', 'https://catfact.ninja/fact').then(({ status, body }) => {
            expect(status).to.eq(200);
            expect(typeof (body.fact)).to.eq('string');
            expect(typeof (body.length)).to.eq('number');
        })
    })
})