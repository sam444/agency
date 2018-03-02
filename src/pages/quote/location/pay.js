import PolicyStep from "../../../components/location/PolicyStep";
import PayInfo from "../../../components/location/PayInfo";
import PolicySideSummary from "../../../components/PolicySideSummary";
import Component from "../../../components/Component";
import {UICell,UIPage,UIMessageHelper,UICurrency,UIDialog,UICardGroup,UICard,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber} from "rainbowui-core";
import {PolicyStore,PolicyAction} from 'rainbow-foundation-sdk';
import alipay from "../../../images/alipay2.jpg";
import wechat from "../../../images/wechat2.jpg";
export default class Index extends Component {
    constructor() {
        super();
        this.policy = PolicyStore.getPolicy();
        this.policy["Notes"]=5;
        this.state = {
            "payinfo":{"info":{}}
        };
        this.error = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAeCAYAAADO4udXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAABGdBTUEAALGOfPtRkwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAdIUlEQVR42oxRwVHDMBDclWQHBs/w4U8BFJAG0gnPFEAd9EAdPGiDDwXwyORDsKW7rDzBicMwYccP6W53b3Xm93qBGVxfiUBwMATQCsy8U/kB5Er9JdzvnX5LwOD8ZOC7VG/ivErx4Y4BiWBJCNFFykh2J/YNquRvsA5HyRtcgtegojemiRroTQdLyu0ZVnrYsFNcZQic3jUdeI0YFjpt9ZSonJrJMnoGRtWmNCAuw/9Bcj+/HwuBPF3/bB1kQJPaY79mrVr9mworWV425f210Zk3EVM3euZ+c9Cc9KuP+H7I9NMxO8tVkXu0j8/A1xbDyxPQXo1uLu/qvxdALHhDg5FB+N///ylAQ92A2BBogyA4hECO/Q+z7L/i/3//TIGCUUDOI2AgnwGylwE9tAnI/80wCkYkAAggrAkLlMr//f/n/u/P3yogwxYtM4Cyx1egmm/ANAbMNv9BxRAnVI0cMCHKAcX8GP/8W87MyNIMZN8eDeaRBwACiAVR7jNCC2JQUfivCFgKtQM5SGXwv2dMXAK7GXjFtzM8v3mLlYf/9b+/v1n+/P4lw8gtZPDv23svYB1mDTSHD2Tu/3//Y/8y/rYEFqlxQKOPjwb1yAIAAcTCxAZpYwFLJ2B7ion73/9fFf/+/S2EJSpgyXQdiKcDS669jEzM1/8xs0CbFPBC7AGwIXMEWHTN/s/IaAasnH2AiSoHKM/1//8flb9/GVcxMzNlA9VtItxqIbZVMwoGOwAIIBYmVjZwXP77+5OB4S9r8r//P6pBTTdQWgM23vcAG8bljP/+XfgPKbWAapmwpAVwYgAa8P8wsPV2mImZ6RwwcTUCC0N1YCNV5t/fv33/Gf+9Z2T4e5hg453h72isDAMAEEAsiAj9Z/Hn/9dWaKICiS0AppcsYJX4k4mHH9iq+szA+O0LAyPbR2hiYgInKFCPjOH3T2BpB6SZWSE9pH9/VwLlrgBZKxj/M+gAlSj/Zng7iYn1swfDn78vGQj0GBgZOEZjZogDgABiYvwN7Lj9/MX//89/YJ+RgQda/W0BdtMrGf78/skio8jAomkAqiaBhclfBqZXDxiY/gEb9z+/AxPUHwZgI52B6dM7BiYgm4WDl4FVXAbSxWVkuMrExJgONO4NtCtr8P/fnyJIiUQIkwr+MyAaisRWpUOlyv0PqSnAQwr/B1mxxAbBWNwFEEDAhPULmEh+xgDbWAFQsZcsrKytrEyMr1ilFRhYdE2AJREzYiCGiRni3R/fGf7/BJZU/+FVIXgchIlbgIFZVBpW8B1jZmZugqQWYKfgz98EYGNeGTRGgg//JwyTgWYuBDKkwG5jYRX++/fbgn9/vib///cDPI7FwMiIkfSg2BlI1kJ5wNL031RgMazExMTKwMzErAv05lIgVqF1soOOLykA8QYg9mbAFj2gxMTEwfCfU5XhP4cyEKsw/mPmz////28pKCawGAtqG/dgysGqmP+WUAwSVAPitUCW63+0cTU0IAnEXkAcAsShUBwErJ0U/+6cwvD3wMJUBlaOSUDjBf8jhTlAAFas36WBGAq/JKfXE8SCWIcuDk7q/QP+XDpIhy7O4iQdHB38C1wdrJODuyD+DS6is4ODi+DgchRsTcF6SZ5fvFgPQScDB7m8d5f3i3x5X2RYJJapUVTIJzF2KKW8xWlDHCdEWhP3e4twsg17rqFy/t1FjgawkvbImDG2+Ymcmu5GnljNnlGH0Sk23HDMW9ihBsRssuDOX0FXQv4qc76snFvAdAUWxK6496WWzY4w9gHyOqJUKTGDGZ6edw2xm8Vi6mi4izvlHWB8HX63LOWXQqkX4HhKnK+i2YAf/346+G45LjHEGibOIaGb2MnH9SrIvzoYg3T3SQIfJpJAjg5mrO5uQz8DZhwDbYblXOBfDcyW8H5QkJhvJNQkRR6IBFffxWvH5fpekLqBbhUayDtdUOACfhK4YWUZszPY6gL6VPy9GR/su6fHI7J6jeLx+RGzGsaHAJyZv0vDUBDH7yWxCCld1FkEcRB1ERyKbiKOShHBrbs6OTkIonsXobvgH6CT/gXi6uYk1RYdamlti22a5Py8NipUJwNJHi/3i3t33zsuHoZMczjZJK4fSNuriJIXW2SqVETKz47E8amG8QblMQ/RBKRnQ0FVQGte2i1K5cuj8dPnTreTBEFom/prljnpz8c05zrmAhtq/yhRGTqwBRkciI/cZfVHyxoEWQnV9ncH0Ozx3U3oe+g95k1w9w/tCH+t47UxeIsqJk1wdUGAoqhzaTzyrBdkkHSCfJpK04G2CN+9/Il/38D/CyGHLjvrQ6as2RngV47AYvdH0LWPgK0fpNEUvi5BsStuXJJ0iy2OofaxiX2zbiq1o1HYVRmMiEwytObZ4K7bpqWP69amAHVT8xI3X5e0Xl0kUKsq0TZ+nIPWg3fV5nIyBaBJ1jdk3fCtaQYoZv0WOK45ROST5dFICqx9b3xFosbdTBy+TxLBgIW24bW/NG4/BaDL2lkaCILwzN156mERFOy0UYMIWkTQwsLfYJnGwlL8DRZaphOjjZ2NPyFok8JOAqIEtIvYiIE05nWPnfHbzaEIprgHe7s3337z2JndwKjuYuC8U6lq0+8P3kbbWYA3EeZBAsI8R+UMbhVrH2i/sNaL6wzy90elpWY07H2pJMQGDhdGMNAAeZipczp4FpJ1BMZNJW8LxNX+Tync5uw4BS1CCVU8V51CiE8pigqSpGV41LUf+leOHKyoQFjMUnNuo+Roi46RFNIl3huYzyHwvuPbCvreM6P6NaalWVrF0LaI08kG5loiP7gFWU9/jcoeWwQ/aZ2mPZd/0vhICzKomRdL/bwtUbuUMy+D91eYwUOuYHZRQbSNgmjgsogpDDEyaYadI2CteZTdZcIVVV5wzmNPUgTqZtqxjg6ObvC/D+A84aTbobnZQhZ/HgMjqPdL6LOdY7GhsIxrLzdqGDo3YHTAAsf69fSuGHkE3gPMsQ4KWojwscQvRZHhErogAukadFCE7Gkr+1sAuqxYpYEgiO7s3iYmxhQSu1QRRCRRLEXxFySIZaytxcJCG8FUCtaipZJKRRGCtTaCIqQSjFYGYmEEY6Le3a5vLhEjIQcHy97M7OzszHtzrAPhaeZyi0STw5MXVC23qs9zham//VbiCpQGIZttQaHYwvQAxqlWUrUjLsWGlfI06K9CMaEyc8ImUnx39CBuj6/s/WXGah3D4mksWOzZh1NPzn+CHzl8W8V4BuNlv/qyDvEkEnUNfWIFykpKVcGidziNPCxxw4V4cmXYdwSIkWEcLx9KBLbmOVFh6wByQyIcLUivuUO+SQBSjvDtlf5RhCtkdESo+GzbtEacSqjc6z/nux+mrN1uUANqWJuFrwXkxl4navP+CazhNAC6jwbHUVuyn7W0kKETXyUaRPUxsl/JwKEgVMQAEIdamBSNIjn6reMQWSfk3ZxvG60ndCSSUxRQLjPH1Ldn9sEeeUfJw3aSMfSCP8MV/sn33I/O1o+pk1uQMl85Imdc03hewJ6apNWi8UwJumcQ78Pc5o8AfFm9SgNBEN6dvTNoco1EEEUUJIJVEBUsfAMtfAwL30FEEOziA4iVhb6DtlaCpFGwEqsUEoK5M/ezO35ze8EgaHEsO7e3t/vtzHwzO1As1/K1v/zLDXpPrjHrwUljRZ/9sWJJxfKoul048AeizsYoVoCdYAmnnoDAIEtbile2YZcJHPsMlhx0VRXoO8dNRNh/JEEMJxGqwNR/0U152RbbLBXv8YanDcm9DkzorO3Awi99ksBz+MMVhsv6rBaZ1GynIS2wj5QudEmF+gWWtVoCxbyGp42DvGPSTdhZB/p5C2wQE9jeT/3aZ61SuJagGlTliTDaVEXyCj3roVP7Lw9F4K128OEQIBhtwnlIQb3qEP3dMlLQlEOtRAkfjRTI8dKNBvvM2bESL8lFjerr8L/Pe1Lrp6lIaSiAJE556m7Ec5iANigMOBuB9EJagBE3oDHniG2vbXW9jeF9EvrT+gF+7H0yYWDJ9GQfeTJ5Bq7CV9qhGDYwb6FdJO2WMWsXxhBhzg/gG38LQKfVszQQBNHZzeZymyB+RRvFyjQ2aW0stNHCX2Bvkx8hVtpZ2FkLtjYBQSz8BYIgiiCpjJpCEhM95dzd8e3miyjCLdzBfszOvpl5bzmfDqe6ES2SzNvTy5A2wHmxhvL76iMH2YAqeEWqpdVfymM/AKtX80nBqOdb4ovD4aVqu9GgrPKW5uE4/a+0xgIqLmBIPAqsUHJQYtGgBA0bM42N7KAEHKHbPSKvjt671vExxk327PMTGs/j7acrwvt7aCWMg2zlsUCohfCROAfTWzjcLXpvVuRMqSyK84ruLqtC6cfgU4BKFhbJpfUBwIY83JIaXybzeh4SyKBM/t0d+KnbEFFBUzZ3xR9Nn/LOsG5MkYbs4yUE5QR40Gk4ScnBd9a11/D5AOAj21PsOtfAV1JmNttK6wMpolraalD/XwWTOk+eumhg28pE+gRrSGfSTYBLBWAwr8MvqD6ibJ3Lw+i4FzxSsukIqSAoOBlRqGH27uU5ngVkxhtsSqGtKJmrfrt0FhWrJqS0PwLQacYqEQNBGN7MJsFATg9OUSxEAwoWtj6CYCW+goU+goVebWUvdhY29oIiKBw+gZUiKghnEQ4Fj8uZZDfrP3vJXeFZhBB2IbMzk9lv/qw7TBBmPT/QQwjlQGZpKQ05ldwQsxwxxmcv1SdpUlTmjJ0OPOggCKo80jERFChFpYH/EzpJbMl8pGUcZxnDjcJm2f7O8h0l/bwcjbEGlA3bAaYDA/jvgZODiIRWYCzW5xw9hzm7GHvFiiIY8mwsQIsWXtAxJOsm6TQo/rl0Cn0h8r41l6ZWBIURALr9VxjgpAsi4TU2kFw3MJPzxR1XsQ5Jyid454Rc/wCb3R0mewhwLqcXllXyfU2fHy2s/3ZA91oobsZInqIKHMMnZ1xKSH9hA5Bulpm9otdl7XHHOsyxkMcUTyrNdYkTSzrr72N81bLeyPRwIDOoIzinK6RXQaNnVO9N6GQLD++jwASsF+HSbFAoVHpFi2tNUZ9vFg/3247rrwvTn6Fw8lHWauJXADqtnaWBIAjP7t5LjcEQYh31B4iVgm0KCxFLSzsrC8FC7BUFwc7W3tZK/AFCQMVCUFKIkiIKEeLpmeT24bfrRYKa6pjjHjO7M/N9MzuAQtZyXgXSJdtJCRFS73kok7J/nseWyzvQdeUff9jNwvf42wGRTlWXzOQssfEp55T6oVqk51poG2oQOwNbDR5Q0vFK/WdbAJJzgFFUadqeQ9WxjKu4eYUNQtC58Z4K1LWd/jNcl2x1ZZRK8B5xMGxm5LXi/hoWppSlnQLsLtsKB6h2IQSQgaucTlrzIgjLYrpyawDrSB2gBTl7oDqYR2lQk6EJEsUFkq/nTqaf4rTXNLRjVPwErGNRq/QI8jKg7x6ZKNLN+j51P/M8HNmD6d1fA1x3sI9nPAixKigQdAnn2tDt+IAJr+GH/laaKt2vXnZ5wre23f6BM8DADp4vGK0PTedjlIbzsSjPbJrHmybWKrAKMsNihNKLcVnZ/heSPxYY+RbBrhj8yzN2YM8HDHtRFYG0jqIc9IE1uExPKXmnLwHYtHqWBoIgul8XucTvoBIJBomoaWwkoDaKf0FttbC0t7KytbBJa2VpEVDSqKClglhYCBEVEaxEm5zhYrwd31wuIRGLgS12l5ndnZn3lqeQ0S+NIExcpnI5xjcarUxrp10Exje9g2lbTUaDizuCXUSwaBi2hyHQOjHyZCYodAbsdnYVtgJYnJ2CnzrE+Fp9KmPEf2ZtQ3xHzHz/GKK7xWEuSsc5YGqLHv9KYVqSiwS4Q/j7OLh1eOAFgS2gApcp5l5ZbueM8ybnUfB78hTUx4hpMRgU1vUC7h+iADxq1zWkulPIRmOV2pDjwMrTeaEyM6KlQxMRY2YMomKdxrHFJ4TuGgwFjkwYmiabH8Bka2AXu/Kn5sN1VCC5jAstWP9rCXM28SKvCW8eCKwltmuIGqntPcsQwRg9UlDGLYKM8x8hDkjWO4WC4YIKfL/E8FincyXZlzxX31XGSgmzsLYtk+ln4X1ktZs4E3G3hK1Poj81P9oEZUpUqf4+StYfkv0DD0KjGElFwdONUG/lU+3Eiui/c4izCKB3T15F/ApAp9WzNBAE0d01udNgCAQRopWVNgqmEMROCwshjYjgrxBBsBb/gRCxUQQRQUFSColCQIiIhYVaiIoGISSR+JXkcrd345sDQ9DIcbDc7R27s7Pz3rwd1rEu4AYJ5rlUup+CV+z9HCE0lVSiNdh1uWW8rO0s4u5D+wjvxtAG5xHbMhCYBaE+FVzNmQNKXR6wZXo9uzohDN9ZQajlnfxP9yE+DLfaRAXOHNwS/lUiy2K9xGgp6wlhn6XRZ8tHXqIzLEtSmZG8R3ZcepVPIvUiegaexVu5JD7KwP/gOhZhHnn6sOoIZoEkT8KrjWORR1Vn9MT9ep8W56kNzOdREQKc65PyGPotSV29onp+F6SvnaTuz8GX0lqrN+EYGixZsoMo81qFYgnPLhyTdjKwhcammsO4U552mt8q4jmzjOj8kYkd2MgwonBia8WtWSayMseH1V84zYWmnOEpvsJAA12f1NXavhocSav+oU1xk33VlcKOiEQr0jSSksm9qxEDXBZVWCXL4Nktot0CnwV7DbuOca3C+Yuiq1tQfIYod5gXxQfATbiByAqcMMW3AHRau0oDQRS9M7vJKkjEYEyhlWBhY6GCYGHwB8RKwdZK1IRARCzETgh+gj9gIRbaqyBiHUEUQUUTH0RMRLNJ3GRmPDN54IMU2+wDZvY+5px7jjYQH+L7VaynQ3nuKNm+bjNh1QUiTa1or+6I6UI1KS6J58n6ujWgn8PtbQPolepCm+23HOdIaqkIjBB0SU/KJ4CFxsjYVimFv2WqshUrJO+jtSJo8CyXdfzQiJxmq+06aPXx7y1pEFkqTKpybof3Dkwzx/con27W5Ht2CHggpZMRL7vcH76UlfwGILJddasxbtkX6Djz0n3eV2+ZOOsMRIXKkSiYjjVO3leCVdIpVc4gkenlH/fQlm4tM5H124/clDMpoCQ6jChOIUmDjDvHiGWfkl4csRjGtdsYyKq69MOoJnP9PXqrHmClKN0rYwDg2oYtzDnZzHH1A0ZQj8jeLUo3v8RC4XMrMhtjJ3vE0w+7LBQcBNveQqAiOKnW0WOumbG+VJCU1itywhGemgHhOCAhoqiSomUHFvT25NXpsix9rnB/2xn2k6iNZdnmtwB8Wj1Iw0AY/S5JU1KoP3VT/KObIDjoWhWkiOCuo4OO0kFcHJSCgw4KKi4KQgcd1EVQcHOrjiIUnGyxuEhdpNU0uTvfdy0oIg6BQMLx3ff73rtjoaMA42+VUWAFq/DjMOOUoh6J3j4OoqTq+5EqFYGqxR2ctWrA8fdoYOCeQWTXyIvZYIR5VcVnC63DcUytAppMIkntxmatK/pJb38XvHT/w/astqfxTPMRA9YKG+qwfgHImsVbm8VqOausWjlS+mn88yA6uvIkK926eD9nB/6GctxRJGa7EXi1tWdTiARRi0CVQ47rLoAMlcG0tjXVDw1es+1LJ+Jz6V+reOIAjkyRCrzfdgoObiT6l87gocWkYNOYUjQFKtFPfuUJ7lsRkXjOirUO6M/XLEY2gqbn0d0w1vUF9nGCvvWG0UmBkuaKv8lYFChj2LBW4o7WKbz4BN/tR1CHsfOaaAJU0SBACbhjBsM1Q5XnpKj7Z1ZPchnFVmKg1tzCOlhgmerhJggD8ILcR7vi878aEmlESpFjzRkQYRdFMaiUOhd29JGC4EMWbrasWMsxMOmSlOEOOmcWSzpfAvBt9SwNg0H4/UhDEltFVFRwUcFJf4SCne1kJzu4i84iDg7+AhdFdHMQFJyE/gEFEYVuUhxE0Qy1NtKvvB8+lxaxiAayZEgul+funrvn4qQEr8KiK6Qw0o0CZcw2+MatbtbLMqowZ3KGWSlPSLBknR32jtEADS32dw+KsGVcs+A/KumkaNQDB4AvLsKQfPcN3qXg5/Y/GU4LGt79peS7NtEc7Rgyy7GT8p+JXBuj9xKeBRZlv9tJtNU2LqH72mFPdyEbyKQlyrQhMmvMAg0CQU4j1g65CKZKphX2MVvbMtqcCtFi0hMXWokzANMTvpdscth64xPc8QPPeYMje7tj+uPAB48bGf4dF1Iq9housUo1L1yniGBdQ1ePCEceIOHeSd0jG+SkYaNGt3Nw2irqZgEV8RLfs/Jj4SNKJCGNchkMMjmXpbLl6cebDduMJoDsGE4/RMvfFX5dot3AcTsL4L0A9StMqWvc39IAvKe2cn6Es2iN3uXSnecyOMDnq/NMepbVQitilTfSeYCtZRu3NmFnQwg5zYfG9wHWdRqYgmMVAMYq7O7/EoBv8/dJGIji+Lu7FgUsRQJR1JC4MDkYJ/kDHPwX3FxcnNwdTYyjs5OziYMuxsnRhQ2jJCYMOIgVNE2RFuid31eMiz/2Du29bz73ee+uQu+5DJ+lUTg8QwjWadK5nKB4O/yHjiwtoNXG3nzfmAgk8GN4IuzksdVFxGKcUIMB5uRIwKPQVeEZ9gOxHMfxeXJlxiQxPpVCb/93/0NGAEECN/M70MiUeYSnpNVWdtp8BYviP46BEmFm85gtEL0HFEchl70K4gVaRy7ZRS9V2fW0d1ke+/UeGTtSDuA8jVwOYldMZYYipQa643FganqmeCCFfYTCXP/sDPEOs4Cqm56IzXewQJhOd9G8dh2ZUk3NC8mneawDlkMqV4SW9aAAo4REgLGDJ+aVNC0Ea6xhpfFkGLuGZelTGDRFtUbW/hW02hfDw80V075zaSrzhtA+gFpJFO3cHLKGeoRByYz7PuobUeCTXKiQtQWbuTgmU7+hUbHAA2weQPP4IWtlqzPSLnii39BmdSMXP96m6eXpRbolIzMOch1K7XdhPXZelxYH5rn1ofgbWfCEchWK8SmAWBhYWUH1+BNgiHf+B+ZWYDSwAEuYVKDYHWBjrevf65cM/758BE09MjByA0tVAWlgnr8IW38KTKjAJhiPGDAfvWEAl1SghjeobfafQQSYoPqADANww5sRWP2x/G//R2BREbgZ9w9nbfgf2q4jddkZsoEgM25C2U8hIr9AxHOUOXBIofkRXOX/52Bg4pMAV/v/RWRSmL59uf/v40vcc4NgPf/R+U9JcPBnKEYH51AGLH8A27A/v4Fm+i9jnQSHu+P/axLs/go07yt8QPTvX1A3/RMiXP4zIAYZ/79lwKx+QOOIDAABBMwPwNLhD7DH8I9jAzMj93TY+BGwSmkD4l5gluf7//0buFfDAGo/gKd8EJaAe47sXMBChgm8pw8yGcuoCpRbDMQB0KbjDxZGvkZGBuab8G4zLjwoATCM2DhBGNha/nef4f/o8mlCACCAmBi/AztH37gYWP8LM7CycNcDM+FKaKHCDOzNFQIT13pg8eoDXVIBKe6xLUiDdNIEgMVhAVDPFtA6I6jgXyZm5kpGJua5/4fsRgmkVZz/RxMNMQAggFgY4F3Sf6Bofw9skKX//8/4Htg7zIB04/87AdOTFVDZdqCa9cAK9jZkwRd4HokJOqIrDqrygGoj/oOWmkAGVEE9wLfARNkENHgSw//RGBlJACCAWDDGiRgZPgLbV5nARHYLNKkLFOQDL5VhZAr8+/mtP8OX9z8YWJi///rx5fd/cBH0n+3/x6dcwJKMHaUuY2S4BOyyFzIy/Nv3f3TnzYgDAAGEe4s9I9NkYIlzlPH/3zBgAgKtgRIDzXwDe4XAupOJC2W9FKRdBWt8XwImzHnAttkWYCl3dzSIRyYACCB8ZzeAZlxPAftzp4Cl0kJgYgkCFlDGwJJIEliKAdtS/9kh0weM34CpCbQYDnRuw34mBsatwCb909GgHdkAIMAAzuzchgTnZ2cAAAAASUVORK5CYII=";

    }
    render() {
        return (
            <UIPage>
                   
                    <div className="main">
                        <div className="row policyInfo">
                            <PolicyStep step="5"></PolicyStep>
                        </div>
                        <UICell type="row">
                            <UICell width="10" className="quoteInfo" id="quoteInfo">
                                <PayInfo>
                                    <div width="12">
                                        <UICell type="row">
                                            <UICell width="4">
                                                <UIBox direction="left">
                                                    <UIButton value="主页" styleClass="warning"  onClick={this.goto} visibled={this.isAgent()}>
                                                        <Param name="path" value="home" />
                                                    </UIButton>
                                                    <UIButton value="后退" onClick={this.goto}>
                                                        <Param name="path" value="quote/location/coverage" />
                                                    </UIButton>
                                                </UIBox>
                                            </UICell>
                                            <UICell width="8">
                                                <UIBox>
                                                    <UIButton value="保存" styleClass="primary" onClick={this.savePolicy.bind(this)}>
                                                        <Param name="path" value="product/list" />
                                                    </UIButton>
                                                    <UIButton value="支付" styleClass="success" causeValidation="true" onClick={this.pay.bind(this)}>
                                                    </UIButton>
                                                </UIBox>
                                            </UICell>
                                        </UICell>
                                    </div>
                                </PayInfo>
                            </UICell>
                            <UICell width="2" className="summary">
                                <PolicySideSummary/>
                            </UICell>

                            <UICell type="row">
                                <UIDialog id="payDialog" title="扫码支付" width="50%" modal="false">
                                    <UICell type="row">
                                        <UICell width="5">
                                            <img src={this.state.payinfo["info"]["qrcode"]} style={{marginLeft:'-25px'}}/>
                                        </UICell>
                                        <UICell width="7">
                                            <UICard title="支付信息">
                                                <UISmartPanelGrid column="1">
                                                    <UIText label="询价号: " widthAllocation="5,7"  io="out" model={this.policy} property="QuotationNo" layout="horizontal"/>
                                                    <UICurrency label="保费：" widthAllocation="5,7" io="out" model={this.policy} property="PremiumDue" layout="horizontal"/>
                                                    {this.getPayImage()}
                                                </UISmartPanelGrid>
                                            </UICard>
                                        </UICell>
                                    </UICell>
                                </UIDialog>
                            </UICell>
                        </UICell>

                    </div>
            </UIPage>
        );
    }

    getPayImage(){
        const payId = this.policy.CAPType;
        if("1"==payId){
            return <img src={alipay} style={{paddingTop:'40px',height:'auto'}}/>
        }
        if("2"==payId){
            return <img src={wechat} style={{paddingTop:'40px',height:'auto'}}/>
        }
    }

    pay(){
        AjaxUtil.show();
        const configJson = JSON.parse(sessionStorage.getItem("project_config"));
        const payId = this.policy.CAPType;
        let pay_url = configJson['PAY_SERVICE'];
        let pay_config = configJson['PAY_CONFIG'];
        let query_url = configJson['QUERY_PAY_SERVICE'];
        let flash_time = pay_config["flashTime"];
        if("1"==payId){
                pay_config["accountId"]=pay_config["alipay_accountId"];
                this.callPayGetWay(pay_url,pay_config,query_url,flash_time);
        }
        if("2"==payId){
                pay_config["accountId"]=pay_config["wechat_accountId"]
                this.callPayGetWay(pay_url,pay_config,query_url,flash_time);
        }
    }

    callPayGetWay(pay_url,pay_config,query_url,flash_time){
        const self = this;
        pay_config["totalAmount"] = this.policy["PremiumDue"];
        pay_config["undiscountableAmount"] = pay_config["totalAmount"];
        pay_config["goodList"][0]["goodsId"] = this.policy["PolicyId"];
        pay_config["goodList"][0]["goodsName"] = this.policy["QuotationNo"];
        pay_config["goodList"][0]["price"] = this.policy["PremiumDue"];
        pay_config["goodList"][0]["quantity"] = "1";
        AjaxUtil.call(pay_url,pay_config,{"method":"POST"}).then((payinfo)=>{
            if(payinfo["status"]=="0"){
                const qrcode = payinfo["info"]["qrcode"];
                const TradeNo = payinfo["info"]["tradeNo"];
                this.policy["TradeNo"]=TradeNo;
                self.queryPay(query_url,payinfo,pay_config,flash_time);
            }else{
                this.state.payinfo["info"]["qrcode"] = this.error;
            }
            AjaxUtil.hide();
            UIDialog.show("payDialog");
            self.setState({"payinfo":payinfo});
        });

    }

    queryPay(query_url,payinfo,pay_config,flash_time){
        const param = {"tradeNo":payinfo["info"]["tradeNo"],"accountId":pay_config["accountId"]};
        const self = this;
        let time=100;
        const checkPay = setInterval(function(){
            AjaxUtil.call(query_url,param,{"method":"POST"}).then((status)=>{
                console.log(status);
                if(time<=0){
                   self.state.payinfo["info"]["qrcode"] = this.error;
                   self.setState({"payinfo":self.state.payinfo});
                   clearInterval(checkPay);
                }
                if(status&&status["info"]["tradeStatus"]=="TRADE_SUCCESS"){
                    clearInterval(checkPay);
                    AjaxUtil.show();
                    const url = self.getURL('POLICY_API','SAVE_POLICY');
                    PolicyAction.savePolicy(url).then((policy)=>{
                        UIDialog.hide("payDialog");
                        self.gotoPath("quote/location/issue");
                    })
                }
                time = time--;
            });
        },flash_time);
    }

}
