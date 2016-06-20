Search.setIndex({envversion:47,filenames:["api_doc","cli","components/components","components/events","components/inventory_db","components/iterations","components/query","components/stations","components/waveforms","faq","how_lasif_finds_coordinates","index","introduction","iris2quakeml","iteration_xml","prerequisites","rotations","ses3d_setup_helper","tools","tools.file_info_cache","tools.parallel","tutorial","tutorial/00_interfaces","tutorial/01_creating_a_new_project","tutorial/02_seismic_events","tutorial/03_station_data","tutorial/04_waveform_data","tutorial/05_download_helpers","tutorial/06_data_inspection","tutorial/07_data_validation","tutorial/08_a_new_iteration","tutorial/09_data_preprocessing","tutorial/10_model_handling","tutorial/11_generating_input_files","tutorial/12_synthetic_waveforms","tutorial/13_misfits_and_adjoint_sources","tutorial/14_model_update","tutorial/15_next_iterations","tutorial/16_customizing_lasif","webinterface","window_selection"],objects:{"lasif.components.events":{EventsComponent:[3,0,1,""]},"lasif.components.events.EventsComponent":{count:[3,1,1,""],get:[3,1,1,""],get_all_events:[3,1,1,""],has_event:[3,1,1,""],list:[3,1,1,""],update_cache:[3,1,1,""]},"lasif.components.inventory_db":{InventoryDBComponent:[4,0,1,""]},"lasif.components.inventory_db.InventoryDBComponent":{get_all_coordinates:[4,1,1,""],get_coordinates:[4,1,1,""],remove_coordinate_less_stations:[4,1,1,""],save_station_coordinates:[4,1,1,""]},"lasif.components.iterations":{IterationsComponent:[5,0,1,""]},"lasif.components.iterations.IterationsComponent":{count:[5,1,1,""],create_new_iteration:[5,1,1,""],create_successive_iteration:[5,1,1,""],create_synthetics_folder_for_iteration:[5,1,1,""],get:[5,1,1,""],get_filename_for_iteration:[5,1,1,""],get_iteration_dict:[5,1,1,""],get_long_iteration_name:[5,1,1,""],has_iteration:[5,1,1,""],list:[5,1,1,""],plot_Q_model:[5,1,1,""],save_iteration:[5,1,1,""]},"lasif.components.query":{QueryComponent:[6,0,1,""]},"lasif.components.query.QueryComponent":{discover_available_data:[6,1,1,""],get_all_stations_for_event:[6,1,1,""],get_coordinates_for_station:[6,1,1,""],get_data_and_synthetics_iterator:[6,1,1,""],get_iteration_status:[6,1,1,""],get_stations_for_all_events:[6,1,1,""],point_in_domain:[6,1,1,""],what_is:[6,1,1,""]},"lasif.components.stations":{StationsComponent:[7,0,1,""]},"lasif.components.stations.StationsComponent":{file_count:[7,2,1,""],force_cache_update:[7,1,1,""],get_all_channels:[7,1,1,""],get_all_channels_at_time:[7,1,1,""],get_channel_filename:[7,1,1,""],get_details_for_filename:[7,1,1,""],get_station_filename:[7,1,1,""],has_channel:[7,1,1,""],total_file_size:[7,2,1,""]},"lasif.components.waveforms":{WaveformsComponent:[8,0,1,""]},"lasif.components.waveforms.WaveformsComponent":{get_available_processing_tags:[8,1,1,""],get_available_synthetics:[8,1,1,""],get_metadata_for_file:[8,1,1,""],get_metadata_processed:[8,1,1,""],get_metadata_processed_for_station:[8,1,1,""],get_metadata_raw:[8,1,1,""],get_metadata_raw_for_station:[8,1,1,""],get_metadata_synthetic:[8,1,1,""],get_metadata_synthetic_for_station:[8,1,1,""],get_waveform_cache:[8,1,1,""],get_waveform_folder:[8,1,1,""],get_waveforms_processed:[8,1,1,""],get_waveforms_raw:[8,1,1,""],get_waveforms_synthetic:[8,1,1,""],reset_cached_caches:[8,1,1,""]},"lasif.iteration_xml":{Iteration:[14,0,1,""],create_iteration_xml_string:[14,4,1,""]},"lasif.iteration_xml.Iteration":{get_process_params:[14,1,1,""],get_source_time_function:[14,1,1,""],processing_tag:[14,2,1,""],write:[14,1,1,""]},"lasif.rotations":{colat2lat:[16,4,1,""],get_border_latlng_list:[16,4,1,""],get_center_angle:[16,4,1,""],get_max_extention_of_domain:[16,4,1,""],get_spherical_unit_vectors:[16,4,1,""],lat2colat:[16,4,1,""],lat_lon_radius_to_xyz:[16,4,1,""],rotate_data:[16,4,1,""],rotate_lat_lon:[16,4,1,""],rotate_moment_tensor:[16,4,1,""],rotate_vector:[16,4,1,""],xyz_to_lat_lon_radius:[16,4,1,""]},"lasif.scripts":{iris2quakeml:[13,3,0,"-"],ses3d_setup_helper:[17,3,0,"-"]},"lasif.scripts.ses3d_setup_helper":{get_divisors:[17,4,1,""],get_domain_decompositions:[17,4,1,""],get_factors_and_multiplicity:[17,4,1,""],get_primes:[17,4,1,""]},"lasif.tools":{parallel_helpers:[20,3,0,"-"]},"lasif.tools.cache_helpers":{file_info_cache:[19,3,0,"-"]},"lasif.tools.cache_helpers.file_info_cache":{FileInfoCache:[19,0,1,""]},"lasif.tools.cache_helpers.file_info_cache.FileInfoCache":{file_count:[19,2,1,""],get_details:[19,1,1,""],get_values:[19,1,1,""],index_count:[19,2,1,""],total_size:[19,2,1,""],update:[19,1,1,""]},"lasif.tools.parallel_helpers":{FunctionInfo:[20,0,1,""],distribute_across_ranks:[20,4,1,""],function_info:[20,4,1,""]},"lasif.window_selection":{find_closest:[40,4,1,""],find_local_extrema:[40,4,1,""],flatnotmasked_contiguous:[40,4,1,""],select_windows:[40,4,1,""]},lasif:{LASIFError:[0,0,1,""],LASIFNotFoundError:[0,0,1,""],LASIFWarning:[0,0,1,""],iteration_xml:[14,3,0,"-"],rotations:[16,3,0,"-"],tools:[18,3,0,"-"],window_selection:[40,3,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"],"3":["py","module","Python module"],"4":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:attribute","3":"py:module","4":"py:function"},terms:{"01000_lp_0":[26,31,34],"02500_npts_2000_dt_0":[31,34],"050km":35,"07e":3,"100000z":[24,28],"12500_npts_4000_dt_0":26,"14e":38,"15e":38,"17e":3,"19th":[22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],"1_2010":[3,6,8,27],"21t17":[24,28],"22e":38,"5_2013":13,"61e":38,"78e":38,"92e":3,"98e":38,"9_1980":[24,26,30,33,34,35],"9_2000":[24,26,28,33,34,35],"9_2011":3,"__init__":[19,23,26],"_dt_":31,"_extract_index_values_filetyp":19,"_extract_index_values_jpeg":19,"_extract_index_values_png":19,"_find_files_filetyp":19,"_find_files_jpeg":19,"_find_files_png":19,"_japan_mag_5":13,"_lp_":31,"boolean":7,"break":15,"byte":19,"case":[3,5,6,15,20,23,25,26,28,30,34,37,38,39,40],"class":[0,3,4,5,6,7,8,12,14,19,20],"default":[1,9,23,29,38,40],"final":1,"float":[16,40],"function":0,"import":[5,6,7,8,12,14,31],"int":[7,17,38],"long":[1,5,8,12,40],"new":[1,5,8,14,15,16,19,21],"public":[13,14,16,17,19,20,29,40],"return":[3,4,5,6,7,8,10,14,16,17,19,20,30,38,40],"short":[5,12,34],"static":31,"super":19,"true":[1,3,5,6,7,8,9,14,19,26,30,32],"try":[1,12],"while":[1,8,11,15,26,27,28,29,31,35,37,39,40],aa00:28,aa01:28,aa02:28,aa03:28,aa04:28,aa05:28,aa22:[30,35],abl:[12,19,20,26,28,31,32,34],about:[1,3,6,7,19,20,23,24,25,30,38,39],abov:15,absolut:[7,8,25],absolute_filenam:8,absorpt:30,accept:1,access:[1,6,8,12,25],accord:[10,35],accordingli:[30,33],account:27,accur:[21,28],achiev:[12,25,30,35],acquir:1,across:[6,15,20,23],action:27,activ:[1,7,8,15,38],actual:[1,8,10,11,12,14,15,21,23,24,25,26,27,28,30,31,33,34,35],adapt:[17,27],add:[1,7,9,19,23,24,30,31,37],addit:[12,15,22,24,30,31,34],addition:15,adher:[3,7,12,15,26,31],adjoint:[1,11,12,21,30,33,34],adjoint_forward:[1,33],adjoint_output_paramet:30,adjoint_revers:[1,33],adjoint_sourc:[23,26],adjoint_sources_and_window:[23,26,35],adjust:[23,24,30,34,35],advantag:[12,23,31],advis:[22,23,33],affect:23,aforement:28,after:[9,15,23,24,25,26,27,35,40],again:[1,4,14,27,31,32,35,37],against:[1,16,29],aid:[22,36],aim:[12,30,38,40],akin:15,algortihm:40,all:[1,3,4,5,6,7,10,12,15,16,17,19,20,23,24,25,26,27,28,29,30,31,33,35,37,38,39,40],allow:[9,28,35,40],almost:[15,30],along:35,alreadi:[4,5,12,23,26,27,30,31,33,34,35,37],also:[1,3,4,5,7,11,12,15,16,23,25,28,30,31,33,35,37,38,39,40],alt:35,altern:35,although:31,altm:7,alwai:[7,21,23,30],america:27,amiss:29,amongst:[1,11],amount:[1,11,12,16,23,27,28,33,34],amplitud:[32,40],anaconda:15,andrea:11,angl:[16,23],ani:[1,3,5,8,10,12,15,19,23,25,27,28,30,31,32,33,35,37,38],anmo:7,anomali:32,anoth:[1,5,25,32],anyth:[5,14,38],appear:29,append:[1,24,25],appli:[26,30,31,32,35,38,40],applic:[7,10,11,27,30],approach:[10,11,12,24,32],appropri:29,approxim:[17,30],arang:40,arbitrari:[19,30,35],archiv:[1,15,25],arclink:10,arduou:11,arg1:38,arg:[1,6,8,12,16],argument:[1,5,9,17,19,20,21,30],aris:29,around:[16,36,38],arrai:[14,38,40],arriv:40,arrow:35,art:36,ask:9,aspect:36,assembl:23,assert:[1,10],assign:26,assist:0,associ:[4,6,24,25,27,30],assum:[1,15,16,28,35,38],assur:[12,15,29,40],attempt:[1,4,10,12,17,23,27,29,30],author:24,automat:[1,7,15,19,23,25,26,31,33,35],autoselect:[1,35],avoid:[23,35],awai:23,awar:[1,25,29,30],axi:[1,16,23],azimuth:16,band:[1,30],bandpass:30,bandwidth:31,base:[0,1,5,12,15,16,21,32,38,40],basemap:15,bash:1,bash_profil:15,bashrc:15,basi:[27,35],basic:29,beachbal:1,becaus:[24,30,36],becom:[1,23,30],been:[4,15,16,20,23,24,28,30,31,33,34,35,37,38],befor:[22,27,30,35,36,37,40],beforehand:1,begin:[24,29],behind:12,belong:23,below:[1,15],best:[1,9,29],better:20,between:[1,27,30,31,35,40],bhe:[7,8],bhz:7,big:[12,15,23],biggest:12,bin:1,bit:[15,23,38,40],black:36,bodi:16,boil:34,bool:40,border:[23,27],borehol:10,both:[1,6,16,22,27,32,33,35,40],bottom:[35,40],bound:[1,7],boundari:[1,23,29,39],boundary_width_in_degre:23,boxfil:35,branch:38,brazil:27,browser:39,build:1,built:[1,26,28,31,38],bunch:[19,25,39],button:35,bw_altm:7,bw_furt:7,cach:[1,3,7,8,12,15,19,23,26,28],cache_db_fil:19,cache_fold:7,cache_help:19,calcul:[1,11,17,20,21,33,34],call:[3,5,6,8,12,15,19,20,23,29,35,38],callback:7,came:30,can:[1,4,7,10,11,12,13,15,19,20,23,24,25,27,28,29,30,31,32,33,35,37,38,40],canada:38,cancel:31,cannot:[26,29],capabl:[26,33,39],care:35,carri:11,cartesian:30,cash:1,catalog:1,categori:1,caution:35,center:[16,26,27,32],certain:[1,3,6,7,8,10,11,12,16,17,24,26],cha:15,chang:[7,12,15,16,23,24,35,38],change_m:30,channel:[1,6,7,8,15,25,27,28],channel_cod:15,channel_id:[7,8,15],channel_prior:[23,27],cheap:3,check:[1,10,11,12,19,29,30,33,34,35],choic:38,choos:[12,25,27,32,35,37],chosen:[23,27,29,30,35],chrome:39,chunk:23,circl:23,circumst:3,clean:25,clear:[3,26,33],click:[35,39],clockwis:16,clone:15,close:[16,23,29],closer:27,closest:[1,40],code:[7,10,11,15,21,23,24,25,27,28,30,38],coeefici:40,coeffici:40,coincid:26,colat2lat:16,colat:16,colatitud:16,collabor:11,collect:[9,15,16,20,27,30],colorama:15,com:[15,17,40],combin:[1,6,7,10,28,30,35],come:[20,27,35,36],comm:[3,4,5,6,7,8,38],commando:37,comment:[1,5,23,30],commit:15,common:[1,12,26],commun:[1,3,4,5,6,7,8],compar:[1,31],comparis:1,comparison:31,complain:29,complementari:22,complet:[12,20,21,38,40],complex:15,complic:38,compon:[0,1],component_nam:[3,4,5,6,7,8],comput:[1,34],computational_setup:30,conciou:36,conda:15,condit:23,config:[1,23,26,27],configur:12,confirm:29,conform:15,conserv:9,consid:[1,6,23,28,32,36,40],consist:[1,15],constant:[1,30],constantli:7,constructor:19,contact:[10,15,29,30,31,38],contain:[1,3,4,6,10,14,15,19,20,23,25,27,28,29,30,38],content:[0,12,26,30],continent:[10,28],continu:[11,15,31],contour:23,contrast:25,contribut:[15,35],conveni:[16,24],convert:[16,31,34,35],coordin:[1,4,6,7],copi:[13,15,24,32,34,35,38],copyleft:[13,14,16,17,19,20,40],copyright:[13,14,16,17,19,20,40],core:[1,15,17,20,30],corner:23,correct:[1,12,15,24,25,28,30,31,32,35],correctli:[15,29],correl:40,correspond:[1,10,19,23,25,30,35,40],could:[4,30],count:[1,3,5,17],counterpart:30,coupl:[9,30,31,33,34,36,37,39],cours:[23,26],cover:26,coverag:28,cpu:17,crash:1,creat:[1,5,14,15,21],create_fold:5,create_iteration_xml_str:14,create_synthetics_folder_for_iter:5,cube:23,cumul:30,current:[1,10,12,13,15,22,24,25,28,30,34,35,37,38],custom:[9,15,21],custom_funct:38,cut:38,cycl:35,dai:36,darwin:15,data_fold:8,data_preprocess:30,data_trac:[38,40],data_typ:8,databas:[1,4,12,19,28],datacent:26,dataless:[7,12,25],datalessse:7,dataprocess:30,date:[1,15,21,39],db_file:4,deal:[1,4,5,7,11,14,26,32,40],debugg:1,decid:31,decis:36,decomposit:17,decor:20,def:[19,20,38],defin:[4,12,15,16,19,21,22,23,24],definit:23,degre:[10,16,17,23],delet:[1,5,12,15,19,33,35,37,38],delta:[14,30,38],demand:[1,10],denot:[1,19,30,35,38],depend:[15,27,28,35,37,38],depth:[1,10,17,23,24,28,32,35,40],depth_in_km:[3,38],deriv:[6,10,11,25,30,32],describ:[8,9,16,23,25,26,30],descript:[23,30,40],design:[11,12,36,39],desir:[10,16,30],desktop:30,despit:7,detail:[1,7,10],detect:[1,29],determin:[16,17,23,31,37],develop:[10,11],deviat:21,dict:[3,6],dictionari:[3,4,5,6,7,8,14,16,19,20,38],did:34,differ:[1,6,10,12,23,24,25,30,32,34,37,38,40],differenti:10,difficulti:11,dimens:23,dir:17,direct:[16,17,32],direction:28,directli:[1,16,23,30,31,32,33,35,38],directori:[1,12,15,22,23,25,26,31],dirti:17,disabl:39,disadvantag:24,disc:5,discov:6,discover_available_data:6,discoveri:22,discret:30,discuss:33,disk:[33,34],dispatch:10,displai:[13,39],distanc:[1,27,35],distance_bin:1,distribut:[1,15,20,24,25,35,39],distribute_across_rank:20,diverg:40,divisor:17,do_that:38,do_thi:38,doc:15,doctest:[3,4,5,6,7,8],doe:[1,5,6,7,8,10,15,23,28,30,32,34,36,38,40],doi:11,domain:[1,6,12,16,17,23,24,25,27,29,30,33,34,35,39],domain_bound:23,domain_rot:23,don:[1,9,15,19,38,40],done:[1,17,31],dont_upd:8,doubl:35,down:[10,34,35],download:[1,4,7,13,15,21,24,26],download_set:23,driven:[11,12],drop:1,dtype:38,due:[9,10,29,34,40],duplic:[1,29],dure:[20,24,30,35],dynam:30,e_phi:16,e_r:16,e_theta:16,each:[1,3,4,6,7,8,9,12,19,20,23,24,25,26,27,28,30,31,32,34,35,37,38],earth:[12,16,21],earthquak:[1,24,28],eas:[3,11,15,26],easi:[24,38],easili:[12,34],east:16,east_data:16,edg:40,edit:[9,23,35],edu:[13,24],effect:[9,23,26,28],effici:[11,23],ehz:7,eight:15,eismic:[11,12],either:[7,10,13,28,35],element:[17,23],elev:10,elevation_in_m:[4,6,7,8,28,38],ellipsi:[3,5,7,8],els:[10,36,38],email:15,embarrassingli:20,emploi:[1,10,11,12,36],empti:[1,20,40],enabl:[1,9,11,15,24,31,40],encod:[23,30,35],encompass:11,encount:[1,15],end:[11,12,35,38],end_dat:7,endeavour:38,endtim:[8,38],energi:40,enforc:[12,26],enough:1,ensur:[15,29,31],enter:10,entir:[15,30],entri:[1,4],envelop:40,environ:[15,30],epicentr:35,equal:[10,15],equat:[16,23],equatori:23,error:[1,11,15,16,25,29,30,38],essenti:[26,28,30,31,37,40],establish:11,etc:24,europ:[23,27],even:[11,34,38],event_1:5,event_2:5,event_cach:[23,26],event_depth_in_km:[38,40],event_inform:38,event_latitud:[38,40],event_longitud:[38,40],event_nam:[1,3,6,8,9,26,27,30,33,34,35,38],event_weight:[30,35],events_comm:3,events_dict:5,eventscompon:[0,2],ever:38,everi:[12,15,19,24,26,27,30,31,33,35,40],everyon:38,everyth:[15,27,30,34,36],everywher:15,evolv:[11,15],exactli:[23,31,35],exampl:[1,15,16,19,21,28,30,34,35],except:[0,1,8,20,26,38],excess:36,exchang:11,exclud:40,execut:[1,12,13,15,20,23,26,27,28,29,31,39],exemplari:[17,30],exist:[1,3,5,6,8,19,23,28,29,35],existing_iter:1,existing_iteration_nam:5,exit:[1,17],expect:[10,15,20,25,38],explain:[1,9,10,26],explanatori:[23,30],explicitli:30,explor:[22,32,35,39],expos:22,extend:16,extens:[15,16,24],extent:[11,17,23],extract:[10,19,20],extrema:40,f90:34,facilit:[12,33],factor:[1,17],fail:[4,10],fair:28,fairli:[6,15],fals:[3,5,6,7,8,14,23,30,40],fashion:38,fast:1,faster:[15,19,31],favor:15,favourit:35,fdsn:[1,12,27],featur:[15,24,34],feel:[24,30,31,38],fichtner:[11,35],field:20,figur:[6,38],file:[1,3,4,5,6,7,8,9,10],file_count:[7,19],file_format:7,file_info_cach:0,filecount:1,fileinfocach:19,filenam:[1,3,5,7,8,14,19,24,25,31,32,38],files:7,filesystem:19,filetyp:19,filter:[26,30,38],find:1,find_closest:40,find_local_extrema:40,fine:[1,9,15,20],finish:37,finit:30,fire:34,firefox:39,first:[10,12,15,19,23,24,29,30,33,35,37,40],fit:[1,24],fix:[1,13,24,30],flag:1,flake8:15,flask:15,flat:40,flatnotmasked_contigu:40,flexibl:[19,24,38],flip:38,float64:38,fly:38,fn01a:38,focal:[1,12],focu:11,focus:36,fold:34,folder:[1,3,5,7,8,9,13,23,24,25,26,28,31,32,34,35,39],folder_path:1,follow:[1,3,6,7,8,10,12,14,15,16,20,23,25,26,27,30,35,37,38,39],force_cache_upd:7,forget:[9,19],form:[5,8],format:[7,10],formula:35,forward:[33,34],forward_field_output_directori:30,found:[0,6,8,10,12,30,34],four:30,fourth:30,fraction:40,fraction_of_stations_that_have_window:6,fragil:1,frame:[23,33,35],framework:[1,11],free:15,freeli:10,freqmax:38,freqmin:38,frequenc:[1,30,31,35,37],frequent:9,friend:24,from:[1,4,5,7,8,10,11,12,15,16,17,20,21,23,24,26,27,28,30,35,36],from_iter:1,full:[1,4,7,11,12,20,21,24,29,36,38,39],fulli:[12,31,33],func_arg:20,function_info:20,functioninfo:20,furt:7,further:10,furthermor:[1,6,12,27,28,30,35],futur:[25,30],gain:24,gather:[1,12],gaussian:32,gcmt:1,gcmt_event_azores_island:1,gcmt_event_near_east_coast_of_honshu:13,gcmt_event_northern_italy_mag_4:[24,26,28,33,34,35],gcmt_event_northwestern_balkan_region_mag_5:[24,26,30,33,34,35],gcmt_event_turkey_mag_5:[3,6,8,27],gcmt_event_vancouver_island:38,gener:[1,10,12,13,14,16,17,19,20,21,23,30],geograph:[16,23],geographiclib:15,geojson:15,geophysik:[13,14,16,17,19,20,40],get:[3,5,6,7,8,10,16,17,19,22,24,28,29,30,33,36,38],get_all_channel:7,get_all_channels_at_tim:7,get_all_coordin:4,get_all_ev:3,get_all_stations_for_ev:6,get_available_processing_tag:8,get_available_synthet:8,get_border_latlng_list:16,get_center_angl:16,get_channel_filenam:7,get_coordin:4,get_coordinates_for_st:6,get_data_and_synthetics_iter:6,get_detail:19,get_details_for_filenam:7,get_divisor:17,get_domain_decomposit:17,get_factors_and_multipl:17,get_filename_for_iter:5,get_iteration_dict:5,get_iteration_statu:6,get_long_iteration_nam:5,get_max_extention_of_domain:16,get_metadata_for_fil:8,get_metadata_process:8,get_metadata_processed_for_st:8,get_metadata_raw:8,get_metadata_raw_for_st:8,get_metadata_synthet:8,get_metadata_synthetic_for_st:8,get_nam:20,get_prim:17,get_process_param:[14,38],get_source_time_funct:14,get_spherical_unit_vector:16,get_station_filenam:7,get_stations_for_all_ev:6,get_valu:19,get_waveform_cach:8,get_waveform_fold:8,get_waveforms_process:8,get_waveforms_raw:8,get_waveforms_synthet:8,getfixtur:[3,4,5,6,7,8],git:15,github:[1,11,15,23,24],give:[24,30],given:[1,5,6,7,8,14,16,24,28,30,33,35,36],gji:35,glob:19,global:[10,23,30],globalcmt:24,globe:[12,23],gnu:[13,14,16,17,19,20,40],goal:[30,31,37],good:[1,24,28,30,33,34],gpl:[13,14,16,17,19,40],gplv3:15,grab:24,grad_:35,grad_csv:35,gradient:1,grain:17,graphic:35,great:[23,35],greater:1,greenwich:16,grei:30,ground:10,group:1,grow:9,guarante:[21,29],guard:16,gui:[1,15],hand:[9,16,21,29,33],handl:[11,21,23],happen:[23,24,30],has_channel:7,has_ev:3,has_iter:5,hassl:33,have:[1,4,7,8,9,10,12,15,16,19,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],heavili:39,heavisid:[30,38],height:19,heiner:11,help:[1,17,27,28,30,35],helper:[5,14,16,20,21],her:15,here:[5,12,15,19,26,30,31,32,37,39],hesit:15,hhz:38,higher:31,highlight:39,highpass:[30,31,38],highpass_period:30,hinder:11,hire:[23,24,28,30],histogram:[1,24],hopefulli:9,horizont:32,howev:[30,35],hpc:[11,34],html:[13,14,15,16,17,19,20,40],http:[1,13,14,15,16,17,19,20,24,40],huge:33,human:12,hurt:[37,38],idea:[30,32,33],ideal:32,ident:[1,23,31],identifi:[7,15,24,25,31,32],igel:11,ignor:[12,20,28,38],illustr:[10,28,36],imag:[10,11,19,32],image_fold:19,imagecach:19,immedi:23,immediatli:7,imped:1,implement:[19,27,38],impli:1,impos:12,imposs:29,improv:11,inaccuraci:16,includ:[1,25,28,34,39],increas:34,increment:[14,30],index:[12,19,40],index_count:19,index_valu:19,indic:[19,29,40],individu:40,infer:23,influenc:[23,27],inform:[1,3,6,7,8],infrastructur:30,ingredi:28,ini:15,inifil:15,initi:[6,23,32,36,40],inner:[9,19,23],input:[1,21],input_fil:33,input_filenam:38,insert:4,insid:[0,1,35,39],inspect:21,instanc:[1,3,4,5,6,7,8],instant:8,instruct:15,instrument:[10,25,28,31],integ:19,integr:[6,15,27],intend:[1,9,15,19,22],interact:[1,22,23,32,34,38,39],interest:[10,23,25,28],intern:[0,4],interpol:31,interpret:28,interstation_distance_in_m:[23,27],interv:25,introduc:[12,37],inventori:[1,4],inventory_db:4,inventory_db_comm:4,inventorydbcompon:[0,2],invers:[1,10,11,12,21,22,23,24,26,27,28,30,31,35,36,37,38,40],invert:30,invoc:7,ipdb:1,iri:[1,4,10,13,24],iris2quakeml:0,iris_single_channel_with_respons:7,is_dissip:30,island:38,issu:[11,12,15,23,24],itali:[24,28],item:[15,20],iteration_1:[5,26,30,32,34,35],iteration_2:[5,26],iteration_:[34,35],iteration_descript:30,iteration_nam:[1,5,14,30,33,34,35],iteration_xml:[0,5],iteration_xml_filenam:14,iterations_comm:5,iterations_fold:5,iterationscompon:[0,2],itself:12,iu_pab:7,javascript:39,joblib:15,join:19,jpeg:19,judg:[9,28,30,35],jump:35,june:[22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],just:[8,12,15,16,17,20,23,27,28,31,32,33,34,35,37,38],justifi:10,keep:[1,10,12,19,23,24,25,27,28,30,34,36,37,38],kei:[3,4,5,6,7,8,14,16],kept:1,kernel:[1,12,23,26,35,36],keyboard:35,know:[1,9,10,15,23,24,25,33],known:[1,5,27],krischer:[1,11,13,14,15,16,17,19,20,40],kula:6,lagrange_polynomial_degre:30,lambda:[7,8],laptop:30,larg:[1,10,11,12,19,27,28,29,34,36],larger:[28,40],lasif:0,lasif_project:23,lasif_tutori:23,lasiferror:0,lasifnotfounderror:[0,5,6,8],lasifwarn:0,last:[5,6,8,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],lat2colat:16,lat:[10,16,24],lat_lon_radius_to_xyz:16,late:6,later:[26,30,31,33,40],latest:[15,38],latitud:[3,4,6,7,8,16,23,24,28,32,38,40],latitudin:[16,17],latter:35,launch:[1,20,28,29,31,35,38],layer:[3,23],learn:23,least:[1,6,22,23],left:31,legaci:28,length:40,lesser:20,let:[9,23,30],letter:11,level:[8,10,32,40],licens:[13,14,16,17,19,20,40],like:[9,26,27,30,31,33,35,38,40],likewis:35,limit:[1,23,30,31,35],linear:[30,31],link:30,linux:15,lion:[11,13,14,15,16,17,19,20,23,40],list:[1,3,5,6,7,8,12,14,15,16,19,20,30,35,38,39,40],list_x:30,lng:[10,24],loc:15,local:[10,28,39,40],local_depth_in_m:[4,6,7,8,38],locat:[1,7,8,10,15,16,23,24,25,27,28],location_cod:15,location_prior:[23,27],log:[23,26,27,30],logfil:20,logic:[23,25],lon:16,long_iteration_nam:8,longitu:16,longitud:[3,4,6,7,8,16,23,24,28,32,38,40],longitudin:17,look:[15,16,23,26,30,32,34,35],loop:40,lot:[6,19,40],lowpass:[30,31,38],lowpass_period:30,m_pp:[3,38],m_rp:[3,38],m_rr:[3,38],m_rt:[3,38],m_tp:[3,38],m_tt:[3,38],mac:15,machin:[12,15,20],made:15,mag:24,magnitud:[1,3,38],magnitude_typ:[3,38],mai:[28,29,35],main:[1,30,40],mainli:[1,7],mainten:12,major:11,make:[1,5,6,8,12,15,24,29,30,31,35,38,39,40],mani:[1,11,26,27,29,30],manner:30,manual:[4,10,28,34,35,36],map:[1,23,24,35,39],mark:30,master:15,match:[6,23,28],matplotlib:15,matter:28,max_energy_ratio:40,max_lat:16,max_lng:16,max_magnitud:1,max_nois:40,max_noise_window:40,max_period:[1,5,14],max_recommend:17,max_year:1,maxima:40,maximum:[1,5,14,16,17,23,35,40],maximum_depth_in_km:23,maximum_latitud:[16,23],maximum_longitud:[16,23],maximum_period:[38,40],mean:[1,4,7,9,12,15,19,23,25,30,35],meaning:[6,12,31],meaningless:1,measur:40,mechan:[1,12,30],mention:[27,30],menu:35,mere:32,meridian:16,messag:[1,17],metadata:[8,10,12,23,27,28,30],metainform:29,meter:[10,27],method:[3,7,11,19,24],mid:12,might:[1,15,21,26,29,30,34,37,38,40],migrat:[1,23],mill:34,million:29,min_cc:40,min_dist:1,min_envelope_similar:40,min_lat:16,min_length_period:40,min_lng:16,min_magnitud:1,min_peaks_trough:40,min_period:[1,5,14],min_veloc:40,min_year:1,mind:[10,12,23,25,28,30,34,36,37],minim:12,minima:40,minimum:[1,5,14,16,23,27,40],minimum_depth_in_km:23,minimum_latitud:[16,23],minimum_longitud:[16,23],minimum_period:[38,40],minise:[25,26,28],minu:[23,24,26],minut:34,misfit:[1,11,15,21,26],miss:[6,15,29],missing_process:6,missing_raw:6,missing_synthet:6,mix:10,mock:15,model:[1,5,11,12,21,23,26,30],model_nam:1,modern:[11,39],modifi:[1,19,38,39],modul:[7,12,15,16,40],moment:[1,3,16,24,33],momenttensor:[1,13,24],monitor:19,more:[1,7,10],most:[1,5,6,8,9,14,15,16,22,23,25,27,28,30],mostli:[12,30],mous:35,move:10,mpi4pi:15,mpirun:[1,31,35],mpp:16,mrp:16,mrr:16,mrt:16,mseed:[8,38],mtp:16,mtt:16,much:[19,40],muenchen:[13,14,16,17,19,20,40],multi:40,multipl:[1,3,15,17,19,25],must:[3,6,7,15,19,24,33,40],mwc:[3,24,28,38],name:[1,3,4,5,6,7,8,14,15,19,20,23,24],name_of_the_iter:1,namedtupl:20,natur:[11,16,23],ndarrai:40,nearli:30,necessari:[7,12,15,21,23,24,25,27,30,35,38],necessarili:19,need:[1,6,7,8,10,12,15,19,20,23,24,25,26,28,30,31,33,34,35,36,37,38],neither:40,nest:7,net:[8,15],network:[1,7,8,10,15,25],network_cod:15,network_st:25,never:[7,12,23,33,34,37],new_iter:1,new_iteration_nam:5,newer:15,next:[1,4,5,7,21,24,35],no_simulation_domain:1,nobrows:1,nois:[9,40],non:[7,12,30],none:[1,4,6,7,8,20,30,38],normal:30,normal_simul:[1,33],normalis:40,normalize_whitespac:[3,4,5,6,7,8],north:16,north_data:16,northern:[24,27,28],nose:15,notabl:10,note:5,noth:[4,15],notic:[24,29,30,35],notion:12,now:[12,13,19,32,33,34,35],npt:[31,38],npts_:31,number:[1,3,5,6,7,12,14,15,16,17,19,20,29,30,31,35,40],number_of_points_per_sid:16,number_of_time_step:30,numer:[11,30,32,36,38],numexpr:15,numpi:[15,38,40],nversion:[11,12],nx_global:[17,30],ny_glob:[17,30],nz_global:[17,30],object:[1,5,7,8,19,20,38],observ:31,obspi:[7,12,13,15,26,38],obtain:30,occas:38,occur:[15,20],off:[1,31],offend:29,offer:[12,30,32,38],offici:[15,38],offset:31,often:[1,11,23,29],oftentim:[10,15],onc:[4,14,20,24,28,34,35,37],onli:[1,3,4,5,6,7,8,10,12,15,20,23,24,25,27,28,29,30,31,33,34,35],open:[1,7,15,23,30,32,35,39],open_to_outsid:1,oper:[1,12,26,29],opinion:[9,12],optim:[1,17,30,36],option:[1,16,17,23,31,32,37],order:[1,15,19,33,35],orfeu:4,org:[13,14,15,16,17,19,20,40],organ:[11,12,30,32],organz:1,origin:[1,10,12,16,24,27],origin_tim:[3,38],other:[1,4,6,7,12,15,19,20,25,26,27,28,29,30,33,35,37,40],otherwis:[1,6,12,15,20,26,29,31,37],out:[6,11,22,30,34,38],outlin:16,output:[1,12,15,17,23,26,29,30,33,34,35,40],output_directori:30,output_filenam:38,outsid:1,outward:16,over:[9,15,30,40],overview:[28,30],own:[12,27,30],pab:7,packag:[11,15],page:[10,15,23],pair:[16,30,35],paper:9,paragraph:[1,25],parallel:[0,1],parallel_help:20,param:5,paramet:[3,4,5,6,7,8,9,14,16,17,19,20,23,27,30,32,33,40],parent:[1,19],part:[12,24,25,26,27,30,33,35,36],partial:30,particular:[6,8,10,35],pass:[1,15,17,20,29,38],past:1,path:[4,5,6,7,8,14,19,30],pdf:[23,24,28,30],pep8:15,per:[6,16,19,27,30,32,34,35,36,38,39],perfectli:23,perform:[11,12,16,21,27,29,31,32,34,35],period:[1,5,14,30,40],perturb:32,phase:[35,40],phi:16,physic:[10,12,23,28,34],pick:[9,10,35],pickl:[23,26],pictur:1,piec:[15,23],pip:15,place:[24,25,26,27,28,30,32,33,35],plai:38,plan:24,platform:[15,34],pleas:[9,10],plot_stat:1,pluggi:15,pml:23,png:[19,23,24,28,30,35],point:[6,7,8,16,23,25,27,28,30,31,34,35],point_in_domain:6,pole:16,pop:[9,32],port:1,posit:[1,16,17,32,35],possibl:[5,6,10,12,17,23,25,27,28,29,30,34,35,38],potenti:[1,11,29,36],pprint:[5,6,7,8],practic:[11,28],precondit:36,prefer:[12,28,38],prem:32,preparatori:12,preprocess:[1,6,11,21,30],preprocessed_:26,preprocessed_hp_0:[26,31,34],preprocessed_hp_:31,preprocessing_funct:[23,26,38],present:[11,12,27,30,37],pretti:[9,10],pretty_nam:19,prev:35,prevent:4,previou:[25,33,37],previous:23,primari:22,prime:17,principl:31,print:[1,5,14,24],prioriti:[23,27],privileg:15,probabl:[30,31,36],problem:[1,10,11,12,25,29],procedur:[10,11],proceed:22,procesing_info:38,process:[1,6,8,10,14,20,26,31],process_param:38,process_synthet:[23,26,38],processed_:38,processing_info:38,processing_tag:[14,31],processor:31,produc:[1,20,33,36],profound:38,program:15,progress:40,progressbar:15,project:0,prone:[11,25],proof:25,propag:11,proper:24,properli:26,proprocess:31,proven:[24,30,33,38],provid:[1,13,17,19,24,40],pull:15,purpos:[5,24,28,31],put:[15,25,26,31,35],px_processors_in_theta_direct:30,py_processors_in_phi_direct:30,pyqt:15,pyqtgraph:15,pytest:15,python:[15,17,31],pz_processors_in_r_direct:30,quakeml:[1,3],qualiti:[11,35],quantifi:26,queri:[1,6,27],query_comm:6,querycompon:[0,2],question:[6,9,10],quick:[1,17,30],quickli:[1,12],quiet:[5,14],quit:[15,16],radial:16,radiu:16,rai:[28,30],rais:[0,5,6,8,10,20,38],ramework:[11,12],random:[3,5],randomev:[6,8],rang:[30,35,37],rank:20,rather:[1,24,29,30],ratio:[9,40],raw:[6,8,10,12,25,26,27,31,34,35,36,38],raycoverag:1,raypath:[1,29,39],read:[1,19,22,30,38],read_onli:19,read_only_cach:1,readabl:12,readi:32,readthedoc:15,real:[7,11,23,26,27,30,31,34,35,36],realli:[24,40],reason:[1,12,15,16,17,24,28,30,36,38,40],rebuilt:1,receiv:[15,36],recent:[5,6,8,11,22,30],recommend:[1,12,17,25,26],record:[10,16,28,30,39],recurs:[1,15],ref_arrai:40,refer:[12,13,21,22,23,30,33,34,35,40],reflect:[7,21,23],regardless:8,region:[3,16,23,38],reindex:19,rel:40,relat:[7,12,24,39],relax:30,relaxation_parameter_list:30,relev:30,reli:39,reliabl:11,remain:37,remaind:1,remov:[1,4,5,7,9,10,19,29,31,35],remove_coordinate_less_st:4,renam:24,repeat:31,repetit:11,replac:[25,30,32],report:29,repositori:15,represent:[12,14,30],reproduc:[11,24,33,37,38],request:[4,19,28],requir:[1,7,12,13],research:[11,36],resembl:[23,26],reserv:26,reset:8,reset_cached_cach:8,resid:26,resourc:30,resp:[7,10,12,23,25,26,28,38],resp_fold:7,respect:[24,38],respons:[6,7,15,25,26,28,31,32,37,38],respositori:11,rest:[15,21],restart:39,restructur:12,result:[1,4,20,28,34,35,36,39],retriev:[4,5,7,8,14,27],revers:[7,35],review:29,rge:11,right:[16,35],root:[1,15,23,26],root_fold:19,rootdir:15,rotat:[0,15],rotate_data:16,rotate_lat_lon:16,rotate_moment_tensor:16,rotate_vector:16,rotation_angle_in_degre:[16,23],rotation_axi:16,rotation_axis_i:23,rotation_axis_x:23,rotation_axis_z:23,round:16,rsdy:6,rule:15,run:[1,4],runn:20,sac:[8,10,12,25,28],safari:39,salt:17,same:[8,12,17,19,24,25,26,27,30,31,32,35,37],sampl:[31,38],sampling_rate_of_forward_field:30,sane:[25,30],saniti:[1,29],satisfi:9,saul:11,save:[4,5,7,13,15,27,32,33,35],save_iter:5,save_station_coordin:4,scale:[1,10,11,12,28],scale_data_to_synthet:30,schema:29,scheme:[1,3,7,12,24],screenshot:39,script:[0,1],scroll:35,search:[1,10,13,24],second:[5,15,19,27,30,40],seconds_after_ev:[23,27],seconds_before_ev:[23,27],section:[1,9,16,23,24,33,37],see:10,seed:[7,10,12,15,23,25,26],seed_fold:7,seem:29,seen:11,seismic:[1,10,11,12,21],seismogram:[16,31],seismolog:11,seismomet:28,select:1,selector:40,self:[19,23,30],sens:40,sensit:35,separ:[7,15,31,35],seper:[10,33],seri:[12,30],serial:14,serializ:20,server:39,servic:[4,13,24,27],ses3d:[0,1,5,12],ses3d_2_0:1,ses3d_4_1:[1,5,30,37],ses3d_conf:34,ses3d_modul:34,ses3d_r07_b:34,ses3d_setup_help:17,session:[15,38],set:[1,5,10,14,17,19,23,26,28,30,31,33,34,37],setup:0,sever:[10,31],shareabl:11,shift:[38,40],ship:[26,34],should:[1,6,7,9,10,14,15,23,25,26,28,29,30,33,34],show:[1,17,23,24,25,30,35,39],show_progress:19,shown:30,side:16,sigma:32,signal:9,signatur:38,sigr:6,similar:[9,31,34,35,38,40],simpl:[4,5,17,21,23,28,29,30,32,34,36,38],simplest:31,simpli:[1,9,24,26,35,39],simplifi:[12,29],simul:[1,17,23,30,31,32,33,34,35,38],simulation_paramet:30,simulation_typ:[1,33],simultan:16,singl:[1,7,8,10,26,30,35],site:13,size:[17,19,27,37,39],skip:[15,35],slice:32,slight:[21,24],slightli:10,slow:[1,7,29],slowest:39,small:[10,14,32,34,40],smaller:23,smart:29,smooth:36,softwar:12,solut:[10,24],solv:29,solver:[1,5,12,14,30,33,37],solver_nam:[1,5,14],solver_paramet:30,solver_set:30,some:[1,4,5,9,15,19,23,24,26,27,28,29,30,32,33,39],someth:[0,9,10,19,29,38],sometim:[8,38],somewher:[1,16],soon:1,sort:[3,7,8,40],sourc:[0,1,3,4,5,6,7,8,11,14,15,16,17,19,20,21,23,24,26,28],source_time_funct:[23,26,38],space:[33,34],specfem3d:[12,23],specfem3d_cartesian:1,specfem3d_globe_cem:1,specfem:[23,30],special:26,specif:[1,7,19,27,30],specifi:[1,5,8,12,16,19,23,28,30,31,35],spectral:31,sped:15,speed:[1,11],spend:36,sphere:[16,23],spheric:[16,23],sphinx:15,sphinx_rtd_them:15,spud:[1,13,24],spudservic:13,sqlite:[4,7,19,23,26],sta:[8,15],stackoverflow:[17,40],stage:[30,40],standalon:15,standard:10,start:[12,14,15,20,23,28,29,30,31,35,38,39],start_dat:7,starttim:8,state:[22,34,37,39],statement:9,station:[1,4,6,7,8,10,12,14,15,21,23,24],station_cach:7,station_cod:15,station_coordin:38,station_fil:7,station_file_avail:1,station_filenam:38,station_id:[4,6,8,15,30,35],station_latitud:[38,40],station_longitud:[38,40],station_weight:[30,35],stations_comm:7,stationscompon:[0,2],stationxml:[7,10,12,23,25,26,27,28],stationxml_fold:7,statist:[23,26],statu:[1,6],step:[10,12,23,30,31,40],stf:38,stf_fct:14,still:[8,12,19,23,35,38],store:[1,4,7,8,12,13,19,23,24,25,26,28,30,31,32,34,35,38],str:[3,5,6,7],straight:26,straightforward:[10,33],strategi:[10,29],stream:[8,38],strict:12,string:[6,10,14,20],strip:5,strongli:[12,25],strongloi:28,structur:[1,12,14,22,23,26,31,34,39],subclass:19,subcommand:1,subdirectori:33,subfold:[24,25,26,27,32,38],subsequ:[1,15,30],subset:10,success:[4,27],successfulli:20,suffer:23,suffici:30,suitabl:[10,11,17,23,30,34,37,40],sum:7,sumatra:16,summari:[1,35],superposit:30,support:10,suppos:38,sure:[1,15,29,30,35,38,39,40],surprisingli:16,sync:6,synthet:[5,6,8,10,12,21,23,26,31,32],synthetic_trac:[38,40],synthetics_fold:8,system:[11,12,15,16,23],tackl:[11,12],tag:[6,8,14,24,26],tag_or_iter:8,take:[1,5,15,16,17,19,27,28,29,30,33,34,35,37],taken:35,tarbal:30,target:40,task:[10,11],teach:21,techniqu:12,tell:[24,35],temp:23,templat:[5,37],tempor:35,tensor:[1,3,16,24,33],term:[7,31],test:[3,5,6,7,9],text:19,than:[7,23,24,27,30,40],thank:26,thei:[1,7,10,12,16,22,24,25,37],them:[1,4,5,6,9,10,13,15,17,19,24,25,28,32,35,36,37,38,39],theme:15,therefor:[16,29],theta:16,thi:[1,3,4,5,6,7,8,9,10,12,14,15,16,17,19,20,21,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],thing:[1,15,30,38,40],third:30,those:[6,15,24,40],three:[16,23,25,28,38],threshold:40,threshold_correl:40,threshold_shift:40,through:[1,32,35],throughout:15,thu:[3,6,8,10,11,15,20,21,23,25,29,33,37,38],time:[1,7,8,9,10,11,12,14,15,19,24,25,26,27,28,29],time_incr:30,time_window:40,timestamp:7,timestep:30,to_iter:1,togeth:[12,19,31,32,33],toi:[21,28,34],toler:10,tomograph:11,too:[1,29,40],tool:[0,11,12],top:[26,35,40],toplevel:15,total:[7,17,19],total_file_s:7,total_s:19,toward:[12,16],trace:40,traceback:[5,6,8,20],traceback_limit:20,track:[19,24,30,38],transfer:[1,5,37],transpar:12,travers:23,travi:15,treat:[10,25],trend:31,tri:[27,29],trigger:10,trivial:[12,31],true_model:32,tupl:[19,20,38,40],turkei:3,turn:[1,34],twice:[33,34,35],two:[1,22,23,24,25,27,32,33,34,35,37,40],twofold:12,type:[1,3,6,8,12,15,19,24,30,34,35],unclear:9,undefin:39,under:[3,15],understood:11,uni:[13,14,16,17,19,20,40],unifi:11,uniqu:[30,31],unit:[1,16,31],unpack:25,unphys:23,unprocess:[26,31],unrot:33,unsmooth:[35,36],until:[1,9],upcom:15,updat:[4,7,8,11],update_cach:3,upon:[1,19,30],url:[1,13,24],usabl:35,usag:[1,13,17,35],useabl:1,user:[10,12,15,22,23,26,27,32],usual:[1,8,10,31,35,37],utc:[24,28],utcdatetim:[3,7,8,38],utf:[23,30,35],util:[11,15,23,35],valid:[1,12,21,24],valu:[1,3,4,5,6,7,8,14,19,20,23,30,31,40],valueerror:5,vancouv:38,variant:30,varieti:10,variou:[9,35,39,40],vast:11,vector:16,veloc:[12,32,35,40],verbos:[1,40],veri:[1,3,7,10,11,12,15,24,28,29,32,33,34,38],verifi:[15,33],version:[1,13,14,15,16,17,19,20,23,30,35,38,40],vertic:[16,32],vertical_data:16,via:[6,15,22,24,31],view:[1,32,35],viewer:32,visual:[32,34],vsv:[32,35],wai:[1,6,9,10,11,24,25,32,35,38,39],walk:[1,32],want:[1,5,12,15,19,24,31,32,33,35,37,38],warn:[0,10,20],wave:[11,32],wavefield:[1,23,26,33,34,38],waveform:[1,5,8,10,11,12,21,23,24,25],waveforms_comm:8,waveformscompon:[0,2],web:4,webbrows:1,webinterfac:[1,13,15,39],webpag:24,webrequest:10,webserv:1,webservic:[1,4],websit:[1,15,39],weight:[24,30],well:[1,11,15,25,30,35],wfs_input_gener:15,what:[1,6,12,15,19,23,24,28,30,33,38],what_i:6,whatev:1,when:[1,10,15,16,20,23,31,32,36],whenev:0,where:[1,7,8,12,15,23,28,30,31,35],wherea:23,whether:23,which:[1,5,6,7,11,12,15,16,17,19,23,24,25,27,30,32,33,35,37,38,40],whichev:23,whilst:1,whole:[1,7,33,40],whose:4,wide:[0,10],width:[19,23],window:1,window_picking_funct:[9,23,26,38],window_select:[0,15],within:[1,3,9,10,15,27,29,30,31,35,39,40],without:[1,31,36],work:[1,3,5,7,9,10,12,15,16,20,23,24,25,27,28,29,31,32,33,35,38,40],workflow:[1,11,12,38],workspac:[15,23],world:[11,30],worri:23,worth:27,would:[3,7,15,27,30],write:[1,14,15,20,38],written:[7,13,14,15,21],wrong:[1,34],www:[13,14,15,16,17,19,20,24,40],x_info:30,xdist:15,xfail:15,xml:[1,3,5,7,12,13,14,23,24,25,26,27],xml_cach:[23,26],xyz_to_lat_lon_radiu:16,year:[1,11],yet:[4,5,25,32,36],you:[1,5,7,9,10,12,13,15,17,19,21,23,24,26,27,28,29,30,31,32,33,34,35,36,37,38,39],your:[9,10,15,23,24,26,27,30,33,34,35,37,38,39],yourself:[7,15],zealand:27,zero:28,zip:15,zne:38,zoom:23,zukauskait:11},titles:["API Documentation","Command Line Interface","API Components","EventsComponent","InventoryDBComponent","IterationsComponent","QueryComponent","StationsComponent","WaveformsComponent","FAQ","How LASIF Finds Coordinates","Welcome to LASIF","Introduction","lasif.scripts.iris2quakeml","lasif.iteration_xml","Installation, Testing &amp; DevInfo","lasif.rotations","SES3D Setup Assistant","lasif.tools","lasif.tools.file_info_cache","lasif.tools.parallel","Tutorial","1. Interfaces","2. Creating a New Project","3. Seismic Events","4. Station Data","5. Waveform Data","6. Download Helpers","7. Data Inspection","8. Data Validation","9. Defining a New Iteration","10. Data Preprocessing","11. Earth Model Handling","12. Generating Input Files","13. Synthetics","14. Misfit and Adjoint Source Calculation","15. Model Update","16. Next Iterations","17. Customizing LASIF","Web Interface","lasif.window_selection"],titleterms:{"final":35,"function":[1,17,30,38],"new":[23,30,37],acquisit:1,actual:36,add_gcmt_ev:1,add_spud_ev:1,adjoint:35,algorithm:9,api:[0,2],assist:17,attenu:30,avail:1,build:15,build_all_cach:1,calcul:35,calculate_all_adjoint_sourc:1,calculate_constant_q_model:1,command:[1,22],common:38,compare_misfit:1,compon:2,configur:23,control:9,coordin:10,creat:[23,37],create_new_iter:1,create_successive_iter:1,custom:38,data:[1,12,25,26,27,28,29,31,38],debug:1,defin:30,deriv:37,detail:11,develop:15,devinfo:15,document:[0,1,15,17],download:27,download_data:1,earth:32,event:[1,24],event_info:1,eventscompon:3,exist:37,faq:9,featur:38,file:[12,23,30,33],file_info_cach:19,finalize_adjoint_sourc:1,find:10,format:12,from:37,further:12,gener:33,generate_all_input_fil:1,generate_input_fil:1,gradient:35,gui:35,handl:32,helper:27,how:[9,10],info:1,inform:[12,15],init_project:1,input:33,inspect:28,instal:15,interfac:[1,22,39],intern:17,introduct:12,inventorydbcompon:4,iris2quakeml:13,iter:[1,30,37],iteration_info:1,iteration_statu:1,iteration_xml:14,iterationscompon:5,lasif:[1,10,11,13,14,15,16,18,19,20,38,40],launch_misfit_gui:1,launch_model_gui:1,line:[1,22],list_ev:1,list_iter:1,list_kernel:1,list_model:1,manag:1,migrat:37,migrate_window:1,misc:1,misfit:[35,37],model:[32,36],more:11,mpi:1,name:25,next:37,note:12,our:11,paper:11,parallel:20,pick:38,pleas:11,plot:1,plot_domain:1,plot_ev:1,plot_kernel:1,plot_model:1,plot_q_model:1,plot_raydens:1,plot_stf:1,plot_wavefield:1,plot_window:1,plot_window_statist:1,preprocess:[31,38],preprocess_data:1,process:38,project:[1,23],quakeml:12,querycompon:6,recap:34,remove_empty_coordinate_entri:1,requir:15,rotat:16,run:15,scheme:[25,35],scratch:37,script:13,see:11,seismic:24,select:[9,35],select_all_window:1,select_window:1,serv:1,ses3d:17,setup:17,shell:1,sourc:[30,35,38],station:25,stationscompon:7,support:12,synthet:[34,38],terminolog:15,test:15,time:[30,38],tool:[18,19,20],tune:9,tutori:[1,21,25,26],updat:[15,36],valid:29,validate_data:1,visualis:35,waveform:26,waveformscompon:8,web:[22,39],weight:35,welcom:11,window:[9,35,37,38],window_select:40,xml:30}})