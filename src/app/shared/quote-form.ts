export class QuoteForm {
  quoteData: {
    veicleType: string,
    forzaVendita: string
  };
  financingData: {
    contractType: string,
    financingType: string,
    material: {
      materialType: string
    }
  };

  constructor() {
    this.quoteData = {
      veicleType: '',
      forzaVendita: ''
    };
    this.financingData = {
      contractType: '',
      financingType: '',
      material: {
        materialType: ''
      }
    };
  }
}
