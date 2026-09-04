import cds from '@sap/cds'

export default class SalesOrderService extends cds.ApplicationService {
  async init() {
    // Resolves to the "SalesOrderAPI" entry in package.json (cds.requires), which is
    // backed by a BTP destination named "SALES_ORDER_DESTINATION" in production.
    const remote = await cds.connect.to('SalesOrderAPI')

    this.on('get_sales_order', async () => {
      const order = await remote.send({ method: 'GET', path: '/' })
      return JSON.stringify(order);      
    })

    return super.init()
  }
}
