describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
   
    
  });

  it('should only update if data was inputted', () => {
    submitServerInfo()
    updateServerTable()
    
    console.log(serverTbody.children[0].firstChild.innerText)
    expect(serverTbody.children[0].firstChild.innerText==="Alice").toBe(true)
    // expect(Object.values(allServers).match(/^[A-Za-z]+$/))
    
  })
 

  afterEach(function() {
    // teardown logic
    
  
    /* serverTbody.innerHTML = '' Don't use because could b/c it doesn't remove event handlers 
                                  which could cause a memory leak */
    while (serverTbody.firstChild) {
        serverTbody.removeChild(serverTbody.firstChild);
      }  //source: https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
    //  serverNameInput.value = ''
    serverId = 0;
    allServers = {};
  });
});
