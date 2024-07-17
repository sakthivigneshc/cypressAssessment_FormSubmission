describe('template spec', () => {
   before(function() {
    cy.fixture('datas').then(function(data) {
        globalThis.data = data;
    })
})

  it('passes', () => {

    // URL of this page
    cy.visit(data.url);

    cy.get("div[role='listitem'] >div >div [class='Xb9hP']>input ").should('be.visible').as("name");
    cy.get("@name").type(data.name);

    // select the 18 or above radio button
    cy.get( "[jsname='WsjYwc'] label[for='i12'] span[class='aDTYNe snByac OvPDhc OIC90c']" ).click();

   // Click the drop down
    cy.get("div[jsname='WsjYwc']div [role='presentation'] .MocG8c.HZ3kWc.mhLiyf.LMgvRb.KKjvXb.DEh1R").click();
   //Select the value Yes from the drop dowm
    cy.get("div[class ='OA0qNb ncFHed QXL7Te']>div:nth-child(3)>div+span").click();
   // Click the submit button
     cy.get("div[role='button'][class ='uArJ5e UQuaGc Y5sE8d VkkpIf QvWxOd']").click();

     // Confirmation message in the webpage
     const ActualText =  cy.get("div[role='heading']+div");
     ActualText .then(($actualtext) => {
     const verifyText = $actualtext.text();
     expect(verifyText).to.eq(data.verifyText); 
     })
    
        // verify the URL contains the text formResponse
       cy.url().then(($url) =>{
        const currentUrl = $url ;
        cy.wrap(currentUrl).should('include', data.urlCheck); 
       })

})

})