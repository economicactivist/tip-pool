describe('Payments tests', () => {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = 100
    tipAmtInput.value = 20
  })

  it('should start with a payment id of 1 ', () => {
    submitPaymentInfo()
    console.log(paymentId)
    expect(paymentId === 1).toBe(true)
  })

  it('should return an object with three properties', () => {
    let returnValue = createCurPayment()
    console.log(Object.keys(returnValue))
    expect(Object.keys(returnValue).length === 3).toBe(true)
  })

  it('should append the correct input values when calling appendPaymentTable() ', () => {
    let curPayment = createCurPayment()
    allPayments['payment1'] = curPayment
    appendPaymentTable(curPayment)

    expect(paymentTbody.children[0].innerText.split("\t")[0] ==='$100').toBe(true)
    expect(paymentTbody.children[0].innerText.split("\t")[1] ==='$20').toBe(true)
    expect(paymentTbody.children[0].innerText.split("\t")[2] ==='20%').toBe(true)
  })

  it('should test if delete button was created', ()=>{
    let newTr = document.createElement('tr');

    appendDeleteBtn(newTr);

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('X');
  })

  afterEach(() => {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    paymentId = 0;
    allPayments = {};
  })
})
