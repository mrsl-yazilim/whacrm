const messages = {
	en: {
		translations: {
			signup: {
				title: "Kayıt Ol",
				toasts: {
					success: "Kullanıcı başarıyla oluşturuldu! Lütfen giriş yapın!",
					fail: "Kullanıcı oluşturulurken hata meydana geldi. Bildirilen verileri kontrol edin.",
				},
				form: {
					name: "İsim",
					email: "Email",
					password: "Parola",
				},
				buttons: {
					submit: "Kayıt Ol",
					login: "Zaten hesabınız var mı? Oturum aç!",
				},
			},
			login: {
				title: "Giriş Yap",
				form: {
					email: "Email",
					password: "Parola",
				},
				buttons: {
					submit: "Giriş",
					register: "Hesabın yok mu? Kayıt ol!",
				},
			},
			auth: {
				toasts: {
					success: "Giriş başarılı!",
				},
			},
			dashboard: {
				charts: {
					perDay: {
						title: "Bugünkü Sohbetler: ",
					},
				},
			},
			connections: {
				title: "WhatsApp",
				toasts: {
					deleted: "WhatsApp bağlantısı başarıyla silindi!",
				},
				confirmationModal: {
					deleteTitle: "Sil",
					deleteMessage: "Emin misiniz? Geri alınamaz.",
					disconnectTitle: "Bağlantıyı Kes",
					disconnectMessage: "Emin misiniz? QR Kodunu tekrar okumanız gerekecek.",
				},
				buttons: {
					add: "WhatsApp Ekle",
					disconnect: "Bağlantıyı Kes",
					tryAgain: "Tekrar Deneyin",
					qrcode: "Kare Kod",
					newQr: "Yeni Kare Kod",
					connecting: "Bağlanıyor",
				},
				toolTips: {
					disconnected: {
						title: "WhatsApp oturumu başlatılamadı",
						content:
							"Cep telefonunuzun internete bağlı olduğundan emin olun ve tekrar deneyin veya yeni bir QR Kodu isteyin",
					},
					qrcode: {
						title: "QR Kodunun okunması bekleniyor",
						content:
							"Oturumu başlatmak için 'QR KODU' düğmesine tıklayın ve cep telefonunuzla QR Kodunu okuyun",
					},
					connected: {
						title: "Bağlantı kuruldu",
					},
					timeout: {
						title: "Cep telefonuyla bağlantı kesildi",
						content:
							"Cep telefonunuzun internete bağlı olduğundan ve WhatsApp'ın açık olduğundan emin olun veya yeni bir QRcode almak için 'Bağlantıyı Kes' düğmesine tıklayın",
					},
				},
				table: {
					name: "İsim",
					status: "Durum",
					lastUpdate: "Son Güncelleme",
					default: "Varsayılan",
					actions: "Eylem",
					session: "Session",
				},
			},
			whatsappModal: {
				title: {
					add: "WhatsApp Ekle",
					edit: "WhatsApp'ı düzenle",
				},
				form: {
					name: "İsim",
					default: "Varsayılan",
				},
				buttons: {
					okAdd: "Ekle",
					okEdit: "Kaydet",
					cancel: "İptal",
				},
				success: "WhatsApp başarıyla kaydedildi.",
			},
			qrCode: {
				message: "Oturumu başlatmak için QrCode'u okuyun",
			},
			contacts: {
				title: "Kişiler",
				toasts: {
					deleted: "Kişi başarıyla silindi!",
				},
				searchPlaceholder: "Ara ...",
				confirmationModal: {
					deleteTitle: "Sil",
					importTitlte: "Kişileri içe aktar",
					deleteMessage:
						"Bu kişiyi silmek istediğinizden emin misiniz? İlgili tüm biletler kaybolacak.",
					importMessage: "Telefondaki tüm kişileri içeri aktarmak istiyor musunuz?",
				},
				buttons: {
					import: "Kişileri İçe Aktar",
					add: "Kişi Ekle",
				},
				table: {
					name: "İsim",
					whatsapp: "WhatsApp",
					email: "Email",
					actions: "Eylem",
				},
			},
			contactModal: {
				title: {
					add: "Kişi ekle",
					edit: "Kişiyi düzenle",
				},
				form: {
					mainInfo: "İletişim detayları",
					extraInfo: "Ek bilgi",
					name: "İsim",
					number: "Whatsapp numarası",
					email: "Email",
					extraName: "Alan Adı",
					extraValue: "Değer",
				},
				buttons: {
					addExtraInfo: "Bilgi ekle",
					okAdd: "Ekle",
					okEdit: "Kaydet",
					cancel: "İptal",
				},
				success: "Kişi başarıyla kaydedildi.",
			},
			queueModal: {
				title: {
					add: "Sıra ekle",
					edit: "Sırayı düzenle",
				},
				form: {
					name: "İsim",
					color: "Renk",
					greetingMessage: "Tebrik Mesajı",
				},
				buttons: {
					okAdd: "Ekle",
					okEdit: "Kaydet",
					cancel: "İptal",
				},
			},
			userModal: {
				title: {
					add: "Kullanıcı Ekle",
					edit: "Kullanıcıyı Düzenle",
				},
				form: {
					name: "İsim",
					email: "Email",
					password: "Parola",
					profile: "Profil",
				},
				buttons: {
					okAdd: "Ekle",
					okEdit: "Kaydet",
					cancel: "İptal",
				},
				success: "Kullanıcı başarıyla kaydedildi.",
			},
			chat: {
				noTicketMessage: "Mesajlaşmaya başlamak için bir sohbet seçin.",
			},
			ticketsManager: {
				buttons: {
					newTicket: "Yeni",
				},
			},
			ticketsQueueSelect: {
				placeholder: "Kuyruklar",
			},
			tickets: {
				toasts: {
					deleted: "Bulunduğunuz sohbet silindi.",
				},
				notification: {
					message: "Yeni mesaj geldi! Gönderen:",
				},
				tabs: {
					open: { title: "Gelen" },
					closed: { title: "Çözüldü" },
					search: { title: "Ara" },
				},
				search: {
					placeholder: "Sohbet veya mesaj ara.",
				},
				buttons: {
					showAll: "Hepsi",
				},
			},
			transferTicketModal: {
				title: "Sohbeti Devret",
				fieldLabel: "Kullanıcı aramak için yazın",
				noOptions: "Bu isimde bir kullanıcı bulunamadı",
				buttons: {
					ok: "Devret",
					cancel: "İptal",
				},
			},
			ticketsList: {
				pendingHeader: "Kuyruk",
				assignedHeader: "Sohbetlerim",
				noTicketsTitle: "Burada hiçbir şey yok!",
				noTicketsMessage: "Bu duruma veya arama terimine sahip bilet bulunamadı.",
				buttons: {
					accept: "Kabul Et",
				},
			},
			newTicketModal: {
				title: "Sohbet Oluştur",
				fieldLabel: "Bir kişiyi aramak için yazın",
				add: "Ekle",
				buttons: {
					ok: "Kaydet",
					cancel: "İptal",
				},
			},
			mainDrawer: {
				listItems: {
					dashboard: "Kontrol Paneli",
					connections: "WhatsApp",
					tickets: "Sohbetler",
					contacts: "Kişiler",
					queues: "Kuyruklar",
					administration: "Yönetim Ayrıcalıkları",
					users: "Kullanıcılar",
					settings: "Ayarlar",
				},
				appBar: {
					user: {
						profile: "Profilim",
						logout: "Çıkış Yap",
					},
				},
			},
			notifications: {
				noTickets: "Bildirim yok.",
			},
			queues: {
				title: "Kuyruklar",
				table: {
					name: "İsim",
					color: "Renk",
					greeting: "Karşılama Mesajı",
					actions: "Eylem",
				},
				buttons: {
					add: "Yeni Ekle",
				},
				confirmationModal: {
					deleteTitle: "Sil",
					deleteMessage:
						"Emin misiniz? Geri alınamaz! Bu kuyruktaki sohbetler hala var olacak, ancak atanmış herhangi bir kuyruk olmayacak.",
				},
			},
			queueSelect: {
				inputLabel: "Kuyruklar",
			},
			users: {
				title: "Kullanıcılar",
				table: {
					name: "İsim",
					email: "Email",
					profile: "Profil",
					actions: "Eylem",
				},
				buttons: {
					add: "Yeni Ekle",
				},
				toasts: {
					deleted: "Kullanıcı başarıyla silindi.",
				},
				confirmationModal: {
					deleteTitle: "Sil",
					deleteMessage:
						"Tüm kullanıcı verileri kaybolacak. Kullanıcıların açık biletleri sıraya taşınacak.",
				},
			},
			settings: {
				success: "Ayarlar başarıyla kaydedildi.",
				title: "Ayarlar",
				settings: {
					userCreation: {
						name: "Kayıt Olma",
						options: {
							enabled: "Aktif",
							disabled: "Pasif",
						},
					},
				},
			},
			messagesList: {
				header: {
					assignedTo: "Temsilci:",
					buttons: {
						return: "Devret",
						resolve: "ÇÖzüldü",
						reopen: "Yeniden Aç",
						accept: "Kabul Et",
					},
				},
			},
			messagesInput: {
				placeholderOpen: "Bir mesaj yazın",
				placeholderClosed: "Mesaj göndermek için bu bileti yeniden açın veya kabul edin.",
				signMessage: "İmza",
			},
			contactDrawer: {
				header: "İletişim Detayları",
				buttons: {
					edit: "Kişiyi Düzenle",
				},
				extraInfo: "Diğer Bilgiler",
			},
			ticketOptionsMenu: {
				delete: "Sil",
				transfer: "Devret",
				confirmationModal: {
					title: "Silinsin mi? ID #",
					titleFrom: "temastan ",
					message: "Dikkat! Sohbetin ilgili tüm mesajları kaybolacak.",
				},
				buttons: {
					delete: "Sil",
					cancel: "İptal",
				},
			},
			confirmationModal: {
				buttons: {
					confirm: "Ok",
					cancel: "İptal",
				},
			},
			messageOptionsMenu: {
				delete: "Sil",
				reply: "Cevapla",
				confirmationModal: {
					title: "Mesaj silinsin mi?",
					message: "Bu işlem geri alınamaz.",
				},
			},
			backendErrors: {
				ERR_NO_OTHER_WHATSAPP:
					"En az bir varsayılan WhatsApp bağlantısı olmalıdır.",
				ERR_NO_DEF_WAPP_FOUND:
					"Varsayılan WhatsApp bulunamadı. Bağlantı sayfasını kontrol edin.",
				ERR_WAPP_NOT_INITIALIZED:
					"Bu WhatsApp oturumu başlatılmadı. Bağlantı sayfasını kontrol edin.",
				ERR_WAPP_CHECK_CONTACT:
					"WhatsApp kişisi kontrol edilemedi. Bağlantı sayfasını kontrol edin.",
				ERR_WAPP_INVALID_CONTACT: "Bu geçerli bir WhatsApp numarası değil.",
				ERR_WAPP_DOWNLOAD_MEDIA:
					"WhatsApp'tan medya indirilemedi. Bağlantı sayfasını kontrol edin.",
				ERR_INVALID_CREDENTIALS: "Doğrulama hatası. Lütfen tekrar deneyin.",
				ERR_SENDING_WAPP_MSG:
					"WhatsApp mesajı gönderilirken hata oluştu. Bağlantı sayfasını kontrol edin.",
				ERR_DELETE_WAPP_MSG: "WhatsApp'tan mesaj silinemedi.",
				ERR_OTHER_OPEN_TICKET:
					"Bu kişi için zaten açık bir çağrı var.",
				ERR_SESSION_EXPIRED: "Lütfen giriş yapın.",
				ERR_USER_CREATION_DISABLED:
					"Kullanıcı oluşturma, yönetici tarafından devre dışı bırakıldı.",
				ERR_NO_PERMISSION: "Bu kaynağa erişim izniniz yok.",
				ERR_DUPLICATED_CONTACT: "Bu numarayla bir kişi zaten var.",
				ERR_NO_SETTING_FOUND: "Bu ID ile hiçbir ayar bulunamadı.",
				ERR_NO_CONTACT_FOUND: "Bu ID ile hiçbir kişi bulunamadı.",
				ERR_NO_TICKET_FOUND: "Bu ID'ye sahip sohbet bulunamadı.",
				ERR_NO_USER_FOUND: "Bu ID'ye sahip kullanıcı bulunamadı.",
				ERR_NO_WAPP_FOUND: "Bu ID'ye ait WhatsApp bulunamadı.",
				ERR_CREATING_MESSAGE: "Veritabanında mesaj oluşturulurken hata oluştu.",
				ERR_CREATING_TICKET: "Veritabanında bilet oluşturulurken hata oluştu.",
				ERR_FETCH_WAPP_MSG:
					"Mesaj WhtasApp'ta getirilirken hata oluştu, belki çok eski.",
				ERR_QUEUE_COLOR_ALREADY_EXISTS:
					"Bu renk zaten kullanımda, başka bir tane seçin.",
				ERR_WAPP_GREETING_REQUIRED:
					"Birden fazla sıra varsa karşılama mesajı gereklidir.",
			},
		},
	},
};

export { messages };
