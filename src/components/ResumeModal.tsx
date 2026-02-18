import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download, FileText, X } from 'lucide-react';
import { downloadResume } from './ResumeGenerator';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const handlePDFDownload = () => {
    const link = document.createElement('a');
    link.href = '/tarun updated resume.pdf';
    link.download = 'Tarun_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPDF = () => {
    window.open('/tarun updated resume.pdf', '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">Download Resume</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="glass-effect rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-portfolio-neon/20">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-portfolio-neon to-portfolio-electric-purple">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">PDF Resume</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Professional PDF format with complete details
                </p>
                <div className="flex gap-2">
                  <Button
                    onClick={handleViewPDF}
                    className="flex-1 bg-gradient-to-r from-portfolio-neon to-portfolio-electric-purple hover:shadow-lg hover:shadow-portfolio-neon/25"
                  >
                    View PDF
                  </Button>
                  <Button
                    onClick={handlePDFDownload}
                    variant="outline"
                    className="border-portfolio-neon/50 hover:bg-portfolio-neon/10"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-portfolio-electric-purple/20">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-portfolio-electric-purple to-portfolio-neon">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">HTML Resume</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Interactive HTML format with animations
                </p>
                <Button
                  onClick={() => {
                    downloadResume();
                    onClose();
                  }}
                  variant="outline"
                  className="w-full border-portfolio-electric-purple/50 hover:bg-portfolio-electric-purple/10"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download HTML
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
