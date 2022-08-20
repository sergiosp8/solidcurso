(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

  class HtmlElement {
    // eslint-disable-next-line no-useless-constructor
    constructor (public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    // eslint-disable-next-line no-useless-constructor
    constructor (public value: string, public placeholder: string) {}
  }

  class InputEvents {
    setFocus () {}
    getValue () {}
    isActive () {}
    removeValue () {}
  }

  // ? Idea para la nueva clase InputElement

  interface InputElementProps {
    id: string;
    type: HtmlType;
    value: string;
    placeholder: string;
  }
  class InputElement {
    public html: HtmlElement
    public attributes: InputAttributes
    public events: InputEvents
    constructor ({ id, type, value, placeholder }: InputElementProps) {
      this.html = new HtmlElement(id, type)
      this.attributes = new InputAttributes(value, placeholder)
      this.events = new InputEvents()
    }
  }

  const inputElement = new InputElement({
    id: 'input-id',
    type: 'input',
    value: '',
    placeholder: ''
  })

  inputElement.events.setFocus()

  console.log({ inputElement })
})()
