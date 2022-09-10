describe('Perform api tests', () => {
    it('#1 When user get random fact about cats #Then proper response should be returned', () => {
        cy.request('https://catfact.ninja/fact').then(response => {
            const responseStatus = response.status;
            const catFact = response.body.fact;
            const factLength = response.body.length;

            assert(responseStatus === 200, `Expected: ${responseStatus} to equal: 200`)
            assert((typeof catFact === 'string') && (catFact != ''), `Checking if: ${catFact} - is string and is not empty`);
            assert((typeof factLength === 'number') && (factLength > 0), `Checking if: ${factLength} - is number and is not empty`);

            cy.log('cat fact: ' + catFact);
            cy.log('fact length: ' + factLength);
        })
    })
})