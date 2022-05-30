export interface DatatableHeader {
  label :string,
  name :string,
  order : number
}

export interface DatatableRowProperty {
  headerName :string,
  value : string,
  headerLabel? :string,
}
