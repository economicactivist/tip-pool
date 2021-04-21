describe('Utilities tests', function () {
  beforeEach(() => {
    billAmtInput.value = 50
    tipAmtInput.value = 10
    submitPaymentInfo()
  })

  it('should calculate the total tip amount', () => {
    expect(sumPaymentTotal('tipAmt')).toEqual(10)

    billAmtInput.value = 80
    tipAmtInput.value = 20

    submitPaymentInfo()

    expect(sumPaymentTotal('tipAmt')).toEqual(30)
  })

  it('should calculate the total bill amount', () => {
    expect(sumPaymentTotal('billAmt')).toEqual(50)

    billAmtInput.value = 80
    tipAmtInput.value = 20

    submitPaymentInfo()

    expect(sumPaymentTotal('billAmt')).toEqual(130)
  })

  it('should calculate the total tip percent', () => {
    expect(sumPaymentTotal('tipPercent')).toEqual(20)

    billAmtInput.value = 80
    tipAmtInput.value = 20

    submitPaymentInfo()

    expect(sumPaymentTotal('tipPercent')).toEqual(45)
  })

  it('should calculate the tip percent of a single bill', ()=>{
    expect(calculateTipPercent(50, 10)).toEqual(20)
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
    allPayments = {};
    paymentId = 0;
  })
})
