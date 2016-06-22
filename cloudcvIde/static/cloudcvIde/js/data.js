export default {
  Data: {
    name: 'input',
    color: '#5b80bf',
    endpoint: {
      src: ['RightMiddle'],
      trg: [],
    },
    params: {
      source: {
        name: 'Data source',
        value: '',
        type: 'text',
      },
      batch_size: {
        name: 'Batch size',
        value: '',
        type: 'number',
      },
      backend: {
        name: 'Backend',
        value: 'LMDB',
        type: 'select',
        options: ['LMDB', 'LEVELDB'],
      },
      scale: {
        name: 'Scale',
        value: '',
        type: 'float',
      },
    },
    props: {
      name: {
        name: 'Name',
        value: '',
        type: 'text',
      },
    },
  },
  SoftmaxWithLoss: {
    name: 'loss',
    color: '#459046',
    endpoint: {
      src: [],
      trg: ['LeftMiddle'],
    },
    params: {
    },
    props: {
      name: {
        name: 'Name',
        value: '',
        type: 'text',
      },
    },
  },
  Convolution: {
    name: 'conv',
    color: '#8cc556',
    endpoint: {
      src: ['RightMiddle'],
      trg: ['LeftMiddle'],
    },
    params: {
      num_output: {
        name: 'No of outputs',
        value: '',
        type: 'number',
      },
      kernel_size: {
        name: 'Kernel size',
        value: '',
        type: 'number',
      },
      stride: {
        name: 'Stride',
        value: '',
        type: 'number',
      },
      pad: {
        name: 'Padding size',
        value: '',
        type: 'number',
      },
      weight_filler: {
        name: 'Weight filler',
        value: 'xavier',
        type: 'select',
        options: ['xavier', 'constant'],
      },
      bias_filler: {
        name: 'Bias filler',
        value: 'constant',
        type: 'select',
        options: ['xavier', 'constant'],
      },
    },
    props: {
      name: {
        name: 'Name',
        value: '',
        type: 'text',
      },
    },
  },
  ReLU: {
    name: 'relu',
    color: '#eadd66',
    endpoint: {
      src: ['RightMiddle'],
      trg: ['LeftMiddle'],
    },
    params: {
      inplace: {
        name: 'Inplace operation',
        value: true,
        type: 'checkbox',
      },
    },
    props: {
      name: {
        name: 'Name',
        value: '',
        type: 'text',
      },
    },
  },
  Accuracy: {
    name: 'acc',
    color: '#d28240',
    endpoint: {
      src: [],
      trg: ['LeftMiddle'],
    },
    params: {
    },
    props: {
      name: {
        name: 'Name',
        value: '',
        type: 'text',
      },
    },
  },
  InnerProduct: {
    name: 'fc',
    color: '#ac4cc5',
    endpoint: {
      src: ['RightMiddle'],
      trg: ['LeftMiddle'],
    },
    params: {
      num_output: {
        name: 'No of outputs',
        value: '',
        type: 'number',
      },
      weight_filler: {
        name: 'Weight filler',
        value: 'xavier',
        type: 'select',
        options: ['xavier', 'constant'],
      },
      bias_filler: {
        name: 'Bias filler',
        value: 'constant',
        type: 'select',
        options: ['xavier', 'constant'],
      },
    },
    props: {
      name: {
        name: 'Name',
        value: '',
        type: 'text',
      },
    },
  },
  Pooling: {
    name: 'pool',
    color: '#e15e4f',
    endpoint: {
      src: ['RightMiddle'],
      trg: ['LeftMiddle'],
    },
    params: {
      pad: {
        name: 'Padding size',
        value: '',
        type: 'number',
      },
      kernel_size: {
        name: 'Kernel size',
        value: '',
        type: 'number',
      },
      stride: {
        name: 'Stride',
        value: '',
        type: 'number',
      },
      pool: {
        name: 'Pooling method',
        value: 'MAX',
        type: 'select',
        options: ['MAX', 'AVE', 'STOCHASTIC'],
      },
    },
    props: {
      name: {
        name: 'Name',
        value: '',
        type: 'text',
      },
    },
  },
};
