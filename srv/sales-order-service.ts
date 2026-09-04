import cds from '@sap/cds'

export default class SalesOrderService extends cds.ApplicationService {
  async init() {
    // Resolves to the "SalesOrderAPI" entry in package.json (cds.requires), which is
    // backed by a BTP destination named "SALES_ORDER_DESTINATION" in production.
    const remote = await cds.connect.to('SalesOrderAPI')

    this.on('get_sales_order', async () => {
      const order = await remote.send({ method: 'GET', path: '/http/ch/s4/saml2bearer/salesorder' })
      //return JSON.stringify(order);
      return order
    })

    return super.init()
  }
}
