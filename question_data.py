import docx2txt
import re
def func(file_path):
    text = docx2txt.process(file_path)
    text+='\n'
    questions_ = re.findall('[A-Z]\d+\..*?\n',text)
    data = []
    for q, ques in enumerate(questions_):
        data1 = {}
        if q != len(questions_) - 1:
            txt_ = text.split(ques)[1].split(questions_[q + 1])[0].replace('\n\n','\n').strip()
            if '\n\n' in txt_:
                data1['row'] = txt_.split('\n\n')[0]
                data1['col'] = txt_.split('\n\n')[-1]
            else:
                data1['row'] = txt_
                data1['col'] = ''
        else:
            if text.split(ques)[1].split('\n\n\n\n')[0].strip() == '':
                txt_ = text.split(ques)[1].split('\n\n\n\n')[0].replace('\n\n','\n').strip()
                if '\n\n' in txt_:
                    data1['row'] = txt_.split('\n\n')[0]
                    data1['col'] = txt_.split('\n\n')[-1]
                else:
                    data1['row'] = txt_
                    data1['col'] = ''
            else:
                txt_ = text.split(ques)[1].replace('\n\n', '\n').strip()
                if '\n\n' in txt_:
                    data1['row'] = txt_.split('\n\n')[0]
                    data1['col'] = txt_.split('\n\n')[-1]
                else:
                    data1['row'] = txt_
                    data1['col'] = ''
        data1['text'] = '.'.join(ques.split('.')[1:]).replace('"',"'")
        data.append(data1)
    return data
