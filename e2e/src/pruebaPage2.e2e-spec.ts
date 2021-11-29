import {browser, element, by } from 'protractor';
 
describe('Mi Test2', ()=>{
    //configuramos nuestro bloque
    beforeEach(()=>{
        browser.get("/autos");

    });
    //creación de prueba 1
    it("El page autos se muestra por defecto", ()=>{
        expect(element(by.css(".titulo")).getText()).toContain("Últimas novedades en Hibridos");
    });  

});


 

