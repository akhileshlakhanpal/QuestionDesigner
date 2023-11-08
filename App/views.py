import os
import sys
from django.http import JsonResponse
import question_data
from django.shortcuts import render,redirect
from .models import *

def home(request):
    data_pass={}
    if request.FILES.get("file") and request.method == 'POST':
        uploaded_file = request.FILES["file"]
        data=question_data.func(uploaded_file)
        data_pass['data_list']=data
        try:
            statement_ = request.POST['statement']
        except Exception as e:
            statement_ = ''
        if statement_:
            try:
                if request.method == 'POST':
                    statement_ = request.POST['statement']
                    questions_ = {}
                    for i in range(100):
                        try:
                            val = request.POST[f'QT_{i}']
                        except Exception as e:
                            break
                        row = []
                        col = []

                        try:
                            val_ = request.POST[f'row_{i}']
                            for v in val_.split('\n'):
                                row.append(v)
                        except:
                            pass
                        try:
                            val_ = request.POST[f'col_{i}']
                            for v in val_.split('\n'):
                                col.append(v)
                        except:
                            pass
                        try:
                            questions_[val] = {'row': '||'.join(row), 'col': '||'.join(col),'section':request.POST[f'SECTION_TYPE_{i}'],'checks':''}
                            if questions_[val]['section']=='2':
                                questions_[val]['checks']= request.POST.getlist(f'checks_{i}')
                                print(questions_[val]['checks'])
                        except Exception as e:
                            print(e)
                            pass
                    if not statements.objects.filter(statement=statement_).values():
                        en = statements(statement=statement_)
                        en.save()
                        statement_id_=en.id
                    else:
                        statement_id_=statements.objects.filter(statement=statement_).values().all()[0]['id']

                    for key, value in questions_.items():
                        if not questions.objects.filter(question=key).values():
                            en=questions(question=key,section=value['section'],prd_usage=True if 'Product/Service Usage' in value['checks'] else False,
                                         market_trend=True if 'Market Trends and Industry Analysis' in value['checks'] else False,customer_satisfaction=True if 'Customer Satisfaction' in value['checks'] else False,
                                         purchase_behaviour=True if 'Purchase Behavior' in value['checks'] else False,price_perception=True if 'Price and Value Perception' in value['checks'] else False,
                                         brand_perception=True if 'Brand Perception/Association' in value['checks'] else False,adv_effectiveness=True if 'Advertising and Marketing Effectiveness' in value['checks'] else False,
                                         prd_development=True if 'New Product Development' in value['checks'] else False,market_seg=True if 'Market Segmentation' in value['checks'] else False,
                                         customer_feedback=True if 'Customer Feedback' in value['checks'] else False,comp_analysis=True if 'Competitor Analysis' in value['checks'] else False,
                                         market_expansion=True if 'Market Entry and Expansion' in value['checks'] else False,distribution_channels=True if 'Distribution Channels' in value['checks'] else False,
                                         customer_preferences=True if 'Consumer Behavior and Preferences' in value['checks'] else False,compliance_issues=True if 'Regulatory and Compliance Issues' in value['checks'] else False,
                                         market_potential=True if 'Market Size and Growth Potential' in value['checks'] else False,psychographics=True if 'Psychographics' in value['checks'] else False,
                                         tech_adoption=True if 'Technology Adoption' in value['checks'] else False,social_responsibility=True if 'Environmental and Social Responsibility' in value['checks'] else False,brand_awarenes=True if 'Brand Awareness' in value['checks'] else False)
                            en.save()
                            question_id_=en.id
                        else:
                            question_id_=questions.objects.filter(question=key).values().all()[0]['id']
                        if not options.objects.filter(row_option=value['row'],column_option=value['col']).values():
                            en=options(row_option=value['row'],column_option=value['col'])
                            en.save()
                            option_id_=en.id
                        else:
                            option_id_=options.objects.filter(row_option=value['row'],column_option=value['col']).values().all()[0]['id']
                        if not statement_to_question.objects.filter(statement_id=statement_id_,question_id=question_id_).values():
                            en=statement_to_question(statement_id=statement_id_,question_id=question_id_)
                            en.save()
                        if not question_to_option.objects.filter(question_id=question_id_,option_id=option_id_).values():
                            en=question_to_option(question_id=question_id_,option_id=option_id_)
                            en.save()
                    return redirect('/')
            except Exception as e:
                exc_type, exc_obj, exc_tb = sys.exc_info()
                fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
                print(exc_type, fname, exc_tb.tb_lineno)
                pass
        else:
            return JsonResponse({"data_list": data})

    return render(request,'pages/new.html',data_pass)
