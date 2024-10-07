import { Column, DataType, Model, Table } from 'sequelize-typescript'

@Table({
  tableName: 'V_PREOP_OPERACAO',
  timestamps: false,
  name: {
    singular: 'operacoes',
    plural: 'operacoes',
  },
  hooks: {
    beforeCreate() {
      throw new Error('Este modelo está restrito para operações de leitura.')
    },
    beforeUpdate() {
      throw new Error('Este modelo está restrito para operações de leitura.')
    },
    beforeDestroy() {
      throw new Error('Este modelo está restrito para operações de leitura.')
    },
  },
})
export class Additive extends Model {
  @Column({
    allowNull: false,
    type: DataType.INTEGER,
    field: 'CDG_EMP',
    primaryKey: true,
  })
  companyId: number

  @Column({
    type: DataType.VIRTUAL,
    get() {
      switch (this.getDataValue('companyId')) {
        case 1:
          return 'LIBRA FIDC'
        case 3:
          return 'BANPAR FOMENTO'
        case 6:
          return 'LIBRA FIDC II NP'
        default:
          return null
      }
    },
    set() {
      throw new Error(`Can't set a value to companyName field.`)
    },
  })
  companyName: string

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
    field: 'NRO_ADI',
    primaryKey: true,
  })
  id: number

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    field: 'NRO_ADI_NGC',
  })
  dealId: number

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
    field: 'NRO_OPE',
  })
  operationId: number

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
    field: 'CDG_PSS',
  })
  payeeId: number

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
    field: 'NRO_CNT',
  })
  contractNumber: number

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
    field: 'IDC_SIT_ADI',
  })
  additiveStatusId: number

  @Column({
    type: DataType.VIRTUAL,
    get() {
      switch (this.getDataValue('additiveStatusId')) {
        case 1:
          return 'A Efetivar'
        case 2:
          return 'Efetivado'
        case 3:
          return 'Cancelado'
        case 4:
          return 'Excluido'
        case 5:
          return 'Baixado'
        default:
          return null
      }
    },
    set() {
      throw new Error(`Can't set a value to additiveStatusDescription field.`)
    },
  })
  additiveStatusDescription: string

  @Column({
    allowNull: false,
    type: DataType.DATEONLY,
    field: 'DTA_GER_ADI',
  })
  dealedAt: Date

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
    field: 'QTD_TIT',
  })
  equityCount: number

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
    field: 'CDG_USR_AGT_NGO',
  })
  userAgentId: number

  @Column({
    allowNull: false,
    type: DataType.FLOAT(10, 2),
    field: 'VLR_NMI_BRT',
  })
  totalAmount: number

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
    field: 'IDC_ESG_SIT',
  })
  operationStageId: number

  @Column({
    type: DataType.VIRTUAL,
    get() {
      switch (this.getDataValue('operationStageId')) {
        case 2:
          return 'Cobranca'
        case 3:
          return 'Liberado'
        case 4:
          return 'Tesouraria'
        case 5:
          return 'Cancelado'
        case 6:
          return 'Pago'
        default:
          return null
      }
    },
    set() {
      throw new Error(`Can't set a value to operationStageDescription field.`)
    },
  })
  operationStageDescription: string

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
    field: 'SIT_OPE',
  })
  operationStatusId: number

  @Column({
    type: DataType.VIRTUAL,
    get() {
      switch (this.getDataValue('operationStatusId')) {
        case 1:
          return 'A Efetivar'
        case 2:
          return 'Efetivado'
        case 3:
          return 'Cancelado'
        case 4:
          return 'Excluido'
        case 5:
          return 'Baixado'
        default:
          return null
      }
    },
    set() {
      throw new Error(`Can't set a value to operationStatusDescription field.`)
    },
  })
  operationStatusDescription: string

  @Column({
    allowNull: true,
    type: DataType.FLOAT(10, 2),
    field: 'PM',
  })
  averageDueTime: number

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    field: 'QTD_SCD',
  })
  draweeCount: number
}
